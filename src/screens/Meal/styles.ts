import { MealTypes } from '@components/MealItem/styles';
import styled, { css } from 'styled-components/native';

type MealTypeProps = {
  typeOfMeal: MealTypes;
};

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 34px 24px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Tag = styled.View`
  height: 34px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-self: flex-start;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TagBullet = styled.View<MealTypeProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  margin-right: 8px;

  background-color: ${({ theme, typeOfMeal }) =>
    typeOfMeal === 'inside' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
