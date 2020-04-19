import React, { useState } from 'react';
import { Image, StatusBar, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { Container, Form, FormInput, TextButton } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  // const loading = useSelector((state) => state.auth.loading);

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
          <TouchableOpacity onPress={handleSubmit}>
            <TextButton>Entrar no sistema</TextButton>
          </TouchableOpacity>
        </Form>
      </Container>
    </>
  );
}

// <SubmitButton loading={loading} onPress={handleSubmit}>Entrar no sistema</SubmitButton>
