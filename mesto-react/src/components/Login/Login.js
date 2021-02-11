import { React, useState } from 'react';

function Login() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function habdleSubmite(e) {
    e.preventDefault();
    let { email, password } = inputValue;
    console.log({ email, password })
  }

  return (
    <div className="register">
      <form action="#" onSubmit={habdleSubmite} className="popup__inputs register__form">
        <h2 className="popup__heading">Вход</h2>
        <input type="email" name="email" className="popup__input register__input" onChange={handleChange} value={inputValue.email} placeholder="Email" required />
        <span className="popup__error" id="name-error"></span>
        <input type="password" name="password" className="popup__input register__input" onChange={handleChange} value={inputValue.password} placeholder="Пароль" required />
        <span className="popup__error" id="link-error"></span>
        <button type="submit" className="popup__submit-button register__button">Войти</button>
      </form>
    </div>
  )
}

export default Login;