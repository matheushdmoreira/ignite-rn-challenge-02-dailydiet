import { ArrowUpRight } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { MealTypes } from '@components/MealItem/styles';

import { Container, StatisticsDescription, StatisticsValue } from './styles';

export type StatisticsCardProps = TouchableOpacityProps & {
  value: string;
  description: string;
  valueSize?: 'normal' | 'small';
  typeMeal?: MealTypes;
  hasIcon?: boolean;
};

export function StatisticsCard({
  value,
  description,
  valueSize = 'normal',
  typeMeal = undefined,
  hasIcon = false,
  ...rest
}: StatisticsCardProps) {
  const theme = useTheme();

  return (
    <Container typeMeal={typeMeal} activeOpacity={0.5} {...rest}>
      <StatisticsValue
        style={{
          fontSize: valueSize === 'normal' ? 32 : 24,
        }}
      >
        {value}
      </StatisticsValue>
      <StatisticsDescription>{description}</StatisticsDescription>

      {hasIcon && (
        <ArrowUpRight
          size={24}
          color={
            typeMeal && typeMeal === 'inside'
              ? theme.COLORS.GREEN_DARK
              : typeMeal && typeMeal === 'outside'
              ? theme.COLORS.RED_DARK
              : theme.COLORS.GRAY_600
          }
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        />
      )}
    </Container>
  );
}
