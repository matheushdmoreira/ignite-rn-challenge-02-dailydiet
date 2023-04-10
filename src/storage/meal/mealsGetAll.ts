import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealsGetAll() {
  try {
    const storaged = await AsyncStorage.getItem(MEAL_COLLECTION);

    if (storaged) {
      const parsedArray = JSON.parse(storaged) as MealStorageDTO[];

      parsedArray.sort(function (a: { title: string }, b: { title: string }) {
        var c = Number(new Date(a.title).getTime());
        var d = Number(new Date(b.title).getTime());

        return d - c;
      });

      parsedArray.map((register) => {
        register.data.sort(function (a, b) {
          var c = Number(new Date(`${a.date} ${a.hour}`).getTime());
          var d = Number(new Date(`${b.date} ${b.hour}`).getTime());

          return d - c;
        });
      });

      const snacks: MealStorageDTO[] = parsedArray;

      return snacks;
    } else {
      const snacks: MealStorageDTO[] = [];

      return snacks;
    }
  } catch (error) {
    throw error;
  }
}
