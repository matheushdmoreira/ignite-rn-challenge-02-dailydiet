import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export async function mealDelete(mealDelete: MealStorageDTO) {
  try {
    const mealsStored = await mealsGetAll();
    const mealDeleteData = mealDelete.data[0];

    const index = mealsStored.findIndex((item) =>
      item.data.find((meal) => meal.id === mealDeleteData.id)
    );

    if (mealsStored[index].data.length === 1) {
      mealsStored.splice(index, 1);
    } else {
      const newMealsData = mealsStored[index].data.filter(
        (register) => register.id !== mealDeleteData.id
      );

      mealsStored[index].data = newMealsData;
    }

    const storege = JSON.stringify([...mealsStored]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storege);
  } catch (error) {
    throw error;
  }
}
