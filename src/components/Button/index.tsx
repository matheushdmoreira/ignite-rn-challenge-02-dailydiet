import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ButtonStyleProps, ButtonText, Container } from './styles';

type Props = TouchableOpacityProps &
  ButtonStyleProps & {
    title: string;
    icon?: 'plus' | 'trash' | 'pencil';
  };

export function Button({ title, icon, type = 'PRIMARY', ...rest }: Props) {
  const { COLORS } = useTheme();

  const iconTypes = {
    plus: (
      <Plus
        size={18}
        color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_700}
        style={{ marginRight: 12 }}
      />
    ),
    trash: (
      <Trash
        size={18}
        color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_700}
        style={{ marginRight: 12 }}
      />
    ),
    pencil: (
      <PencilSimpleLine
        size={18}
        color={type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_700}
        style={{ marginRight: 12 }}
      />
    ),
  };

  return (
    <Container type={type} activeOpacity={0.6} {...rest}>
      {icon && iconTypes[icon]}

      <ButtonText type={type}>{title}</ButtonText>
    </Container>
  );
}
