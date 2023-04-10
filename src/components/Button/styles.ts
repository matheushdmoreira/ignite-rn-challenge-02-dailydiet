import styled, { css } from 'styled-components/native';

export type ButtonStyleProps = {
  type?: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.GRAY_600
      : theme.COLORS.WHITE};
    border: 1px solid
      ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_700};
  `}

  border-radius: 6px;
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700}; ;
  `}
`;
