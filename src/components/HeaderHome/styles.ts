import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  padding-top: ${Platform.OS === 'ios'
    ? Constants.statusBarHeight + 24
    : getStatusBarHeight() + 24}px;
`;

export const Logo = styled.Image``;

export const Profile = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;
