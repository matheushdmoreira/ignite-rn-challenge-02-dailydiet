import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 34px 24px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Label = styled.View`
  width: 100%;
  min-height: 68px;
`;

export const LabelText = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const TwoColumns = styled.View`
  flex-direction: row;
`;
