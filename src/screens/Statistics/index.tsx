import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { StatisticsNavigationProps } from 'src/@types/navigation';

import { StatisticsCard } from '@components/StatisticsCard';

import {
  BackButton,
  Container,
  Content,
  Header,
  HeaderDescription,
  HeaderValue,
  Title,
  TwoColumns,
} from './styles';

export function Statistics() {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {
    percentOfMealsInsideTheDiet,
    betterSequenceInsideOfTheDiet,
    insideOfTheDietValue,
    outsideOfTheDietValue,
    totalOfTheDietValue,
    typeStatistic,
  } = route.params as StatisticsNavigationProps;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header type={typeStatistic}>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft
            size={24}
            color={
              typeStatistic === 'inside'
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
            }
          />
        </BackButton>

        <HeaderValue>{percentOfMealsInsideTheDiet.toFixed(2)}%</HeaderValue>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticsCard
          value={`${betterSequenceInsideOfTheDiet}`}
          valueSize="small"
          description="melhor sequência de pratos dentro da dieta"
          style={{ marginBottom: 12 }}
        />

        <StatisticsCard
          value={`${totalOfTheDietValue}`}
          valueSize="small"
          description="refeições registradas"
          style={{ marginBottom: 12 }}
        />

        <TwoColumns>
          <StatisticsCard
            value={`${insideOfTheDietValue}`}
            valueSize="small"
            description="refeições dentro da dieta"
            typeMeal="inside"
            style={{ width: '48%' }}
          />

          <StatisticsCard
            value={`${outsideOfTheDietValue}`}
            valueSize="small"
            description="refeições fora da dieta"
            typeMeal="outside"
            style={{ width: '48%' }}
          />
        </TwoColumns>
      </Content>
    </Container>
  );
}
