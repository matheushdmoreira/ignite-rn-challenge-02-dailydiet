import React from 'react';
import { Container, LoadingIndicator } from './styles';

type LoadingProps = {
  center?: boolean;
};

export function Loading({ center = false }: LoadingProps) {
  return (
    <Container center={center}>
      <LoadingIndicator />
    </Container>
  );
}
