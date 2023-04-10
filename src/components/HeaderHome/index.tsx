import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Logo, Profile } from './styles';

export function HeaderHome() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Profile source={{ uri: 'https://github.com/matheushdmoreira.png' }} />
    </Container>
  );
}
