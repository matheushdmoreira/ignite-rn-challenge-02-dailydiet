import { MealTypes } from '@components/MealItem/styles';
import styled, { css } from 'styled-components/native';

type TypeProps = {
  typeOfMeal: MealTypes;
};

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<TypeProps>`
  margin-bottom: 8px;

  ${({ theme, typeOfMeal }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${typeOfMeal === 'outside'
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK};
  `}
`;

export const Description = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const ImageMeal = styled.Image`
  margin-top: 40px;
`;
