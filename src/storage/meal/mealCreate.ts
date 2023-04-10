import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { getDateAlreadyExists } from '@utils/getDateAlreadyExists';
import { MealStorageDTO } from './MealStorageDTO';
import { mealsGetAll } from './mealsGetAll';

export async function mealCreate(newMeal: MealStorageDTO) {
  try {
    const mealsStored = await mealsGetAll();

    const isDateOfNewMealAlreadyExists = await getDateAlreadyExists(newMeal);

    const newMealData = newMeal.data[0];

    if (isDateOfNewMealAlreadyExists) {
      const index = mealsStored.findIndex(
        (item) => item.title === newMeal.title
      );

      mealsStored[index].data.push(newMealData);
    } else {
      mealsStored.push(newMeal);
    }

    const storege = JSON.stringify([...mealsStored]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storege);
  } catch (error) {
    throw error;
  }
}
