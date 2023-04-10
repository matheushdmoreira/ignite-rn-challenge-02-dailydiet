import styled, { css } from 'styled-components/native';

export type MealTypes = 'inside' | 'outside';

type MealTypeProps = {
  type: MealTypes;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;
  margin-top: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700}; ;
  `}
`;

export const MealTitle = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600}; ;
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealBulletType = styled.View<MealTypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) =>
    type === 'inside' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
