import React from 'react';
import logo from '../../images/vector/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Лого (Место - Россия)" className="header__logo" />
      <div className="header__auth">Войти</div>
    </header>
  );
}

export default Header;