import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { BackButton, Container, HeaderProps, Title } from './styles';

type HeaderComponentProps = HeaderProps & {
  title: string;
};

export function Header({ title, type }: HeaderComponentProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container type={type}>
      <BackButton onPress={handleGoBack}>
        <ArrowLeft
          size={24}
          color={
            type
              ? type === 'inside'
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
              : theme.COLORS.GRAY_700
          }
        />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
