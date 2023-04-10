import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Divider,
  MealBulletType,
  MealHour,
  MealTitle,
  MealTypes,
} from './styles';

export type MealItemProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  typeOfMeal: MealTypes;
};

type MealItemComponentProps = TouchableOpacityProps & {
  item: MealItemProps;
};

export function MealItem({ item, ...rest }: MealItemComponentProps) {
  return (
    <Container activeOpacity={0.5} {...rest}>
      <MealHour>{item.hour}</MealHour>
      <Divider />
      <MealTitle>{item.name}</MealTitle>

      <MealBulletType type={item.typeOfMeal} />
    </Container>
  );
}
