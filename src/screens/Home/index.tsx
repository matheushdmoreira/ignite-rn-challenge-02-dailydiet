import { MealItem } from '@components/MealItem';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealsGetAll } from '@storage/meal/mealsGetAll';

import { Button } from '@components/Button';
import { HeaderHome } from '@components/HeaderHome';

import { StatisticsCard } from '@components/StatisticsCard';

import { mealsSequenceInsideDiet } from '@utils/mealsSequenceInsideDiet';
import {
  Container,
  EmptyContent,
  EmptyContentText,
  HeaderList,
  TitleList,
  TitleSectionList,
  TitleSectionListText,
} from './styles';

export function Home() {
  const [meals, setMeals] = useState([] as MealStorageDTO[]);
  const [percentOfMealsInsideTheDiet, setPercentOfMealsInsideTheDiet] =
    useState(0);
  const [betterSequenceInsideOfTheDiet, setBetterSequenceInsideOfTheDiet] =
    useState(0);
  const [insideOfTheDietValue, setInsideOfTheDietValue] = useState(0);
  const [outsideOfTheDietValue, setOutsideOfTheDietValue] = useState(0);
  const [totalOfTheDietValue, setTotalOfTheDietValue] = useState(0);

  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate('statistics', {
      percentOfMealsInsideTheDiet,
      betterSequenceInsideOfTheDiet,
      insideOfTheDietValue,
      outsideOfTheDietValue,
      totalOfTheDietValue,
      typeStatistic: percentOfMealsInsideTheDiet >= 50 ? 'inside' : 'outside',
    });
  }

  function handleNewMeal() {
    navigation.navigate('mealEdit', {});
  }

  function handleOpenMeal(mealId: string) {
    navigation.navigate('meal', { mealId });
  }

  async function fetchMealsStored() {
    try {
      const mealsStored = await mealsGetAll();
      setMeals(mealsStored);

      const sequence = await mealsSequenceInsideDiet();
      setBetterSequenceInsideOfTheDiet(sequence);

      const snacksStatisticsValues = mealsStored.reduce(
        (acc, meal) => {
          meal.data.map((item) => {
            item.typeOfMeal === 'inside'
              ? (acc.mealInsideOfTheDiet = acc.mealInsideOfTheDiet + 1)
              : item.typeOfMeal === 'outside'
              ? (acc.mealOutsideOfTheDiet = acc.mealOutsideOfTheDiet + 1)
              : acc;

            acc.totalOfMeals = acc.totalOfMeals + 1;
          });

          return acc;
        },
        {
          mealInsideOfTheDiet: 0,
          mealOutsideOfTheDiet: 0,
          totalOfMeals: 0,
        }
      );

      const { mealInsideOfTheDiet, mealOutsideOfTheDiet, totalOfMeals } =
        snacksStatisticsValues;

      setInsideOfTheDietValue(mealInsideOfTheDiet);
      setOutsideOfTheDietValue(mealOutsideOfTheDiet);
      setTotalOfTheDietValue(totalOfMeals);

      const totalPercent = (mealInsideOfTheDiet / totalOfMeals) * 100;

      totalPercent === 0
        ? setPercentOfMealsInsideTheDiet(0)
        : setPercentOfMealsInsideTheDiet(totalPercent);
    } catch (error) {
      Alert.alert(
        'Refeições',
        'Não foi possível carregar os registros das refeições.'
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsStored();
    }, [])
  );

  return (
    <Container>
      <HeaderHome />

      <StatisticsCard
        value={`${
          percentOfMealsInsideTheDiet
            ? percentOfMealsInsideTheDiet.toFixed(2)
            : 0
        }%`}
        description={
          !percentOfMealsInsideTheDiet
            ? 'ainda não existem refeições cadastradas'
            : 'das refeições dentro da dieta'
        }
        hasIcon={meals.length > 0}
        typeMeal={
          !percentOfMealsInsideTheDiet || percentOfMealsInsideTheDiet >= 50
            ? 'inside'
            : 'outside'
        }
        onPress={handleOpenStatistics}
        disabled={meals.length === 0}
      />

      <SectionList
        sections={meals}
        ListHeaderComponent={() => (
          <HeaderList>
            <TitleList>Refeições</TitleList>

            <Button title="Nova refeição" icon="plus" onPress={handleNewMeal} />
          </HeaderList>
        )}
        renderSectionHeader={({ section }) => (
          <TitleSectionList>
            <TitleSectionListText>{section.title}</TitleSectionListText>
          </TitleSectionList>
        )}
        renderItem={({ item }) => (
          <MealItem item={item} onPress={() => handleOpenMeal(item.id)} />
        )}
        keyExtractor={(item, _) => item.id}
        ListEmptyComponent={() => (
          <EmptyContent>
            <EmptyContentText>
              Ainda não existem refeições cadastradas.
            </EmptyContentText>
          </EmptyContent>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
      />
    </Container>
  );
}
