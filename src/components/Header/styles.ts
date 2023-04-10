import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

import { SnackTypes } from '@components/MealItem/styles';

export type HeaderProps = {
  type?: SnackTypes;
};

export const Container = styled.View<HeaderProps>`
  position: relative;
  align-items: center;
  padding: 34px 24px 54px 24px;
  padding-top: ${Platform.OS === 'ios'
    ? Constants.statusBarHeight + 34
    : getStatusBarHeight() + 34}px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

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
  position: absolute;
  left: 24px;
  top: ${Platform.OS === 'ios'
    ? Constants.statusBarHeight + 34
    : getStatusBarHeight() + 34}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
