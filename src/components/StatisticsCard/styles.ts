import { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import { MealTypes } from '@components/MealItem/styles';

type StatisticsCardStyleProps = TouchableOpacityProps & {
  typeMeal?: MealTypes;
};

export const Container = styled.TouchableOpacity<StatisticsCardStyleProps>`
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ theme, typeMeal = undefined }) =>
    typeMeal &&
    css`
      background-color: ${typeMeal === 'inside'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}

  border-radius: 8px;
`;

export const StatisticsValue = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const StatisticsDescription = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;
