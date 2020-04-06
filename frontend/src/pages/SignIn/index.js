import React from 'react';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt='fastfeet'/>
      <form>
        <span>SEU EMAIL</span>
        <input type='email' placeholder='exemplo@email.com'/>
        <span>SUA SENHA</span>
        <input type='password' placeholder='***************'/>
        
        <button type='submit'>Entrar no sistema</button> 
      </form>
    </>
  );
}
