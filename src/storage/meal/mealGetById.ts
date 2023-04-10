import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealDTO, MealStorageDTO } from './MealStorageDTO';

export async function mealGetById(
  mealId: string
): Promise<MealDTO | undefined> {
  try {
    const storaged = await AsyncStorage.getItem(MEAL_COLLECTION);

    if (!storaged) {
      return undefined;
    }

    const parsedMealStoraged = JSON.parse(storaged) as MealStorageDTO[];

    const mealsForDateById = parsedMealStoraged.filter((register) =>
      register.data.find((meal) => meal.id === mealId)
    )[0];

    const mealById = mealsForDateById.data.find((meal) => meal.id === mealId);

    return mealById;
  } catch (error) {
    throw error;
  }
}
