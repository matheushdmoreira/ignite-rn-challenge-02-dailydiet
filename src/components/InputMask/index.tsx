import React from 'react';
import { TextInput } from 'react-native';
import { MaskInputProps } from 'react-native-mask-input';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

type Props = MaskInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function InputMask({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_600}
      {...rest}
    />
  );
}
