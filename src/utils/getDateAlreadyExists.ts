import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import { mealsGetAll } from '@storage/meal/mealsGetAll';

export async function getDateAlreadyExists(newMeal: MealStorageDTO) {
  const storedMeals = await mealsGetAll();

  const storedRegistersDate = storedMeals.map((item) => item.title);

  const dateOfNewMealAlreadyExists = storedRegistersDate.includes(
    newMeal.title
  );

  return dateOfNewMealAlreadyExists;
}
