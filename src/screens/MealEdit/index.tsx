import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView } from 'react-native';
import { Masks } from 'react-native-mask-input';
import uuid from 'react-native-uuid';

import { MealEditNavigationProps } from 'src/@types/navigation';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealCreate } from '@storage/meal/mealCreate';
import { mealGetById } from '@storage/meal/mealGetById';
import { mealUpdate } from '@storage/meal/mealUpdate';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { InputMask } from '@components/InputMask';
import { Loading } from '@components/Loading';
import { Select } from '@components/Select';

import {
  Container,
  Content,
  Form,
  Label,
  LabelText,
  TwoColumns,
} from './styles';

export function MealEdit() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [mealType, setMealType] = useState<'inside' | 'outside' | null>(null);

  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = (route.params as MealEditNavigationProps) || undefined;

  function timeMask(text?: string) {
    const cleanTime = text?.replace(/\D+/g, '');

    const hourFirstDigit = /[012]/; // only 0,1 or 2
    let hourSecondDigit = /\d/; // any number

    if (cleanTime?.charAt(0) === '2') {
      hourSecondDigit = /[0123]/; // only 0,1,2 or 3
    }

    const minuteFirstDigit = /[012345]/; // only 0,1,2,3,4 or 5
    const minuteSecondDigit = /\d/; // any number

    return [
      hourFirstDigit,
      hourSecondDigit,
      ':',
      minuteFirstDigit,
      minuteSecondDigit,
    ];
  }

  async function handleCreateMeal() {
    try {
      if (!name || !description || !date || !hour || !mealType) {
        Alert.alert(
          'Cadastro de refeição',
          'Para cadastrar uma refeição você precisa preencher todos os campos.'
        );
        return;
      }

      const id = String(uuid.v4());

      const newMeal = {
        title: date,
        data: [
          {
            id,
            name,
            description,
            date,
            hour,
            typeOfMeal: mealType,
          },
        ],
      } as MealStorageDTO;

      await mealCreate(newMeal);

      navigation.navigate('mealComplete', { typeOfMeal: mealType });
    } catch (error) {
      Alert.alert(
        'Cadastro de refeição',
        'Não foi possível cadastrar a refeição, tente novamente mais tarde.'
      );
    }
  }

  async function handleUpdateMeal() {
    try {
      if (!name || !description || !date || !hour || !mealType) {
        Alert.alert(
          'Atualização de refeição',
          'Para atualizar essa refeição você precisa preencher todos os campos.'
        );
        return;
      }

      const id = mealId;

      const newMeal = {
        title: date,
        data: [
          {
            id,
            name,
            description,
            date,
            hour,
            typeOfMeal: mealType,
          },
        ],
      } as MealStorageDTO;

      await mealUpdate(newMeal);

      navigation.navigate('home');
      Alert.alert(
        'Atualização de refeição',
        'Refeição atualizada com sucesso.'
      );
    } catch (error) {
      Alert.alert(
        'Atualização de refeição',
        'Não foi possível atualizar a refeição.'
      );
    }
  }

  async function fetchMelById() {
    setLoading(true);
    try {
      if (!mealId) {
        return;
      }

      const mealStoraged = await mealGetById(mealId);
      if (mealStoraged) {
        setName(mealStoraged?.name);
        setDescription(mealStoraged?.description);
        setDate(mealStoraged?.date);
        setHour(mealStoraged?.hour);
        setMealType(mealStoraged?.typeOfMeal);
      }
    } catch (error) {
      Alert.alert(
        'Carregamento de refeição',
        'Houve um problema ao carregar os dados da refeição.'
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (mealId) {
      fetchMelById();
    }
  }, []);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{ flex: 1 }}>
        <Header title="Nova refeição" />

        <Content>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Form>
                <Label style={{ marginBottom: 24 }}>
                  <LabelText>Nome</LabelText>
                  <Input value={name} onChangeText={setName} />
                </Label>

                <Label style={{ height: 130, marginBottom: 24 }}>
                  <LabelText>Descrição</LabelText>
                  <Input
                    editable
                    multiline
                    textAlignVertical="top"
                    style={{
                      maxHeight: 110,
                      minHeight: 110,
                    }}
                    value={description}
                    onChangeText={setDescription}
                  />
                </Label>

                <TwoColumns>
                  <Label style={{ flex: 1, marginRight: 10 }}>
                    <LabelText>Data</LabelText>
                    <InputMask
                      placeholder=""
                      mask={Masks.DATE_DDMMYYYY}
                      value={date}
                      onChangeText={(value) => {
                        setDate(value.replace(/[$,.\s]/g, ''));
                      }}
                    />
                  </Label>

                  <Label style={{ flex: 1, marginLeft: 10 }}>
                    <LabelText>Hora</LabelText>
                    <InputMask
                      placeholder=""
                      mask={timeMask}
                      value={hour}
                      onChangeText={(value) => {
                        setHour(value.replace(/[$,.\s]/g, ''));
                      }}
                    />
                  </Label>
                </TwoColumns>

                <Label style={{ marginTop: 24 }}>
                  <LabelText>Está dentro da diéta?</LabelText>
                  <TwoColumns>
                    <Select
                      icon="circle"
                      text="Sim"
                      type="SUCCESS"
                      style={{ flex: 1, marginRight: 5 }}
                      isActive={mealType === 'inside'}
                      onPress={() => setMealType('inside')}
                    />

                    <Select
                      icon="circle"
                      text="Não"
                      type="FAILURE"
                      style={{ flex: 1, marginLeft: 5 }}
                      isActive={mealType === 'outside'}
                      onPress={() => setMealType('outside')}
                    />
                  </TwoColumns>
                </Label>
              </Form>

              {mealId ? (
                <Button
                  title="Atualizar refeição"
                  style={{ marginTop: 32 }}
                  onPress={handleUpdateMeal}
                />
              ) : (
                <Button
                  title="Cadastrar refeição"
                  style={{ marginTop: 32 }}
                  onPress={handleCreateMeal}
                />
              )}
            </>
          )}
        </Content>
      </ScrollView>
    </Container>
  );
}
