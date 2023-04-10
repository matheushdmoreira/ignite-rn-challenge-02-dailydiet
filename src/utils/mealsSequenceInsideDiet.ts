import { mealsGetAll } from '@storage/meal/mealsGetAll';

export async function mealsSequenceInsideDiet() {
  try {
    const storedMeals = await mealsGetAll();

    const mealsDiet = storedMeals.map((register) =>
      register.data.map((meal) => meal.typeOfMeal)
    );

    const mealsInOrOutOfDiet = mealsDiet.reduce((acc, meal) =>
      acc.concat(meal)
    );

    const convertToString = mealsInOrOutOfDiet.join(',');

    const excludeFailure = convertToString.split('outside');

    const sort = excludeFailure.sort((seq1, seq2) => seq2.length - seq1.length);

    const searchTheLonger = sort.splice(0, 1);

    const separateResult = searchTheLonger.pop();

    const returnToArray = separateResult ? separateResult.split(',') : [];

    const filteredResults = returnToArray.filter((item) => item !== '');

    return filteredResults.length;
  } catch (error) {
    throw error;
  }
}
