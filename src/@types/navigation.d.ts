import { MealTypes } from '@components/MealItem/styles';

export type StatisticsNavigationProps = {
  percentOfMealsInsideTheDiet: number;
  betterSequenceInsideOfTheDiet: number;
  insideOfTheDietValue: number;
  outsideOfTheDietValue: number;
  totalOfTheDietValue: number;
  typeStatistic: MealTypes;
};

export type MealEditNavigationProps = {
  mealId?: string;
};

export type MealCompleteNavigationProps = {
  typeOfMeal: MealTypes;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: StatisticsNavigationProps;
      meal: MealEditNavigationProps;
      mealEdit: MealEditNavigationProps;
      mealComplete: MealCompleteNavigationProps;
    }
  }
}
