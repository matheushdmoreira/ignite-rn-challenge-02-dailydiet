import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  padding-top: 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const HeaderList = styled.View``;

export const TitleList = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TitleSectionList = styled.View`
  margin-top: 32px;
`;

export const TitleSectionListText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const EmptyContent = styled.View`
  align-items: center;
  padding: 36px 16px;
`;

export const EmptyContentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
