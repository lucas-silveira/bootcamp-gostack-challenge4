import React from 'react';
import logotipo from '../assets/img/fb-logo.jpg';
import userIcon from '../assets/img/user.svg';

function Header() {
  return (
    <header className="header">
      <img width="140" src={logotipo} className="n-img" alt="Logotipo" />
      <ul className="user-menu">
        <li>Meu Perfil</li>
        <li><img width="24" alt="" src={userIcon} className="n-img" /></li>
      </ul>
    </header>
  )
}

export default Header
