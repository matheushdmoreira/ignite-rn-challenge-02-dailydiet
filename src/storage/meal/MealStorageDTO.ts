import { MealTypes } from '@components/MealItem/styles';

export type MealDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  typeOfMeal: MealTypes;
};

export type MealStorageDTO = {
  title: string;
  data: MealDTO[];
};
