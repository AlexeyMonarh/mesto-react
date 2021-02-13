import React from 'react';
import logo from '../../images/vector/logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Лого (Место - Россия)" className="header__logo" />
      <div style={{display: 'flex'}}> 
        <div style={{marginRight: '15px'}}>{props.email}</div>
        <Link className="header__auth header__auth_mobile" onClick={props.onClick} to={props.to}>{props.title}</Link>
      </div>
    </header>
  );
}

export default Header;