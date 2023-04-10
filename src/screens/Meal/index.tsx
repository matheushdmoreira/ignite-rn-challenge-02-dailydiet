import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { MealEditNavigationProps } from 'src/@types/navigation';

import { MealDTO } from '@storage/meal/MealStorageDTO';
import { mealGetById } from '@storage/meal/mealGetById';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';

import { mealDelete } from '@storage/meal/mealDelete';
import {
  Container,
  Content,
  Description,
  SubTitle,
  Tag,
  TagBullet,
  TagDescription,
  Title,
} from './styles';

export function Meal() {
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState({} as MealDTO | undefined);

  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as MealEditNavigationProps;

  async function fetchMelById() {
    setLoading(true);
    try {
      if (!mealId) {
        return;
      }

      const mealStoraged = await mealGetById(mealId);
      setMeal(mealStoraged);
    } catch (error) {
      Alert.alert(
        'Carregamento de refeição',
        'Houve um problema ao carregar os dados da refeição.'
      );
    } finally {
      setLoading(false);
    }
  }

  function handleGoToEditMeal() {
    navigation.navigate('mealEdit', { mealId });
  }

  async function handleDeleteMeal() {
    try {
      if (!meal) {
        return;
      }

      await mealDelete({
        title: meal.date,
        data: Array(meal),
      });

      navigation.navigate('home');
      Alert.alert('Exclusão de refeição', 'Refeição excluida com sucesso.');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Exclusão de refeição',
        'Não foi possível excluir a refeição, tente novamente mais tarde.'
      );
    }
  }

  useEffect(() => {
    fetchMelById();
  }, []);

  return (
    <Container>
      <Header title="Refeição" />

      <Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Title>{meal?.name}</Title>
            <Description>{meal?.description}</Description>

            <SubTitle>Data e hora</SubTitle>
            <Description>{`${meal?.date} às ${meal?.hour}`}</Description>

            {meal?.typeOfMeal === 'inside' ? (
              <Tag>
                <TagBullet typeOfMeal="inside" />
                <TagDescription>dentro da dieta</TagDescription>
              </Tag>
            ) : (
              <Tag>
                <TagBullet typeOfMeal="outside" />
                <TagDescription>fora da dieta</TagDescription>
              </Tag>
            )}

            <Button
              title="Editar refeição"
              icon="pencil"
              style={{ width: '100%', marginTop: 'auto' }}
              onPress={handleGoToEditMeal}
            />

            <Button
              title="Excluir refeição"
              type="SECONDARY"
              icon="trash"
              style={{ width: '100%', marginTop: 8 }}
              onPress={handleDeleteMeal}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
