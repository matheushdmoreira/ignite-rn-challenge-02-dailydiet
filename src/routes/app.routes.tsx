import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';
import { MealComplete } from '@screens/MealComplete';
import { MealEdit } from '@screens/MealEdit';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: COLORS.GRAY_100 },
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="meal" component={Meal} />
      <Screen name="mealEdit" component={MealEdit} />
      <Screen name="mealComplete" component={MealComplete} />
    </Navigator>
  );
}
