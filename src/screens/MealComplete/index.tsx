import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';

import { MealCompleteNavigationProps } from 'src/@types/navigation';

import imgMealInside from '@assets/img-meal-inside.png';
import imgMealOutside from '@assets/img-meal-outside.png';

import { Button } from '@components/Button';

import { Container, Description, ImageMeal, Title } from './styles';

export function MealComplete() {
  const route = useRoute();
  const { typeOfMeal } = route.params as MealCompleteNavigationProps;
  const navigation = useNavigation();
  const [mealType, setMealType] = useState<'inside' | 'outside' | null>(null);

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title typeOfMeal={typeOfMeal}>
        {typeOfMeal === 'inside' ? 'Continue assim!' : 'Que pena!'}
      </Title>
      <Description>
        {typeOfMeal === 'inside'
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Description>

      <ImageMeal
        source={typeOfMeal === 'inside' ? imgMealInside : imgMealOutside}
      />

      <Button
        title="Ir para a página inicial"
        style={{ marginTop: 32 }}
        onPress={handleGoToHome}
      />
    </Container>
  );
}
