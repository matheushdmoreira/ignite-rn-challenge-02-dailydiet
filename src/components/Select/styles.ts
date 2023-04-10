import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type SelectTypeStyleProps = {
  isActive?: boolean;
  type?: 'SUCCESS' | 'FAILURE';
};

export const Container = styled(TouchableOpacity)<SelectTypeStyleProps>`
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-height: 50px;
  background-color: ${({ theme, isActive, type }) =>
    isActive && type === 'SUCCESS'
      ? theme.COLORS.GREEN_LIGHT
      : isActive && type === 'FAILURE'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};

  border: ${({ theme, isActive, type }) =>
    isActive && type === 'SUCCESS'
      ? theme.COLORS.GREEN_MID
      : isActive && type === 'FAILURE'
      ? theme.COLORS.RED_MID
      : theme.COLORS.GRAY_200};
`;

export const Icon = styled(MaterialIcons).attrs<SelectTypeStyleProps>(
  ({ theme, type }) => ({
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 8,
  })
)`
  margin-right: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
