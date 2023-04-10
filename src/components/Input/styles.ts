import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 48px;
  max-height: 48px;

  border: 1px solid;
  border-radius: 6px;
  padding: 14px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    background-color: ${theme.COLORS.WHITE};
    border-color: ${theme.COLORS.GRAY_300};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
