import React, { useState } from 'react';
import { Image, StatusBar, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { Container, Form, FormInput, SubmitButton } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />
          <Button onPress={handleSubmit} title="Entrar no sistema" />
        </Form>
      </Container>
    </>
  );
}

// <SubmitButton loading={loading} onPress={handleSubmit}>Entrar no sistema</SubmitButton>
