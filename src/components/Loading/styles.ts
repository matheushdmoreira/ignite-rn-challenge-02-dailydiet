import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  center: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex: 1;
  padding: 50px;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_100}; */

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_600,
  })
)``;
