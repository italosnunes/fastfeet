import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeet" />
          <Link to="/delivery">ENCOMENDAS</Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <Link to="/problem">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
