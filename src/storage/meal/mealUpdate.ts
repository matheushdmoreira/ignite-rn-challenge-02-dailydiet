import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealCreate } from './mealCreate';
import { mealDelete } from './mealDelete';
import { mealsGetAll } from './mealsGetAll';

export async function mealUpdate(mealUpdate: MealStorageDTO) {
  try {
    const mealsStored = await mealsGetAll();
    const mealUpdateData = mealUpdate.data[0];

    const index = mealsStored.findIndex((item) =>
      item.data.find((meal) => meal.id === mealUpdateData.id)
    );

    if (index > 1) {
      const indexData = mealsStored[index].data.findIndex(
        (item) => item.id === mealUpdateData.id
      );

      mealsStored[index].data[indexData] = mealUpdateData;

      const storege = JSON.stringify([...mealsStored]);

      await AsyncStorage.setItem(MEAL_COLLECTION, storege);
    } else {
      await mealDelete(mealUpdate);
      await mealCreate(mealUpdate);
    }
  } catch (error) {
    throw error;
  }
}
