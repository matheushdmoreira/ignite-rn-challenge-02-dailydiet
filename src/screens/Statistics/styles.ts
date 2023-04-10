import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import { MealTypes } from '@components/MealItem/styles';

type HeaderProps = {
  type: MealTypes;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View<HeaderProps>`
  align-items: center;
  padding: 34px 24px 54px 24px;
  padding-top: ${Platform.OS === 'ios'
    ? Constants.statusBarHeight + 34
    : getStatusBarHeight() + 34}px;

  ${({ theme, type }) =>
    type &&
    css`
      background-color: ${type === 'inside'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  align-self: left;
`;

export const HeaderValue = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const HeaderDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 34px 24px;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TwoColumns = styled.View`
  width: 100%;
  max-width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
