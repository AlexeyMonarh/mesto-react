import React from 'react';
// import logo from '../../images/';
// import '../../';

function App() {
  return (
    <div>

      {/* Body */}

      <body class="page">

        {/* //Header */}

        <header className="header">
          <img src="{logo}" alt="Лого (Место - Россия)" className="header__logo" />
        </header>

        {/* //Main */}

        <main className="content">
          <section className="profile">
            <div className="profile__avatar-hover">
              <img src="#" alt="Ваш Аватар" className="profile__avatar" />
            </div>
            <div className="profile__info" id="">
              <div className="profile__info-content">
                <h1 className="profile__info-name"></h1>
                <p className="profile__info-status"></p>
              </div>
              <button className="profile__info-edit-button"></button>
            </div>
            <button className="profile__add-button"></button>
          </section>
          <section>
            <ul className="elements">
            </ul>
          </section>
        </main>

        {/* Footer */}

        <footer className="footer">
          <img src="./images/vector/mesto_Russia.svg" alt="2020_Место_Россия" />
        </footer>

        {/* Popup Edit profile */}

        <div className="popup popup_edit-profile">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-icon"></button>
            <form action="#" className="popup__inputs" name="popup" novalidate>
              <h2 className="popup__heading">Редактировать профиль</h2>
              <input type="text" className="popup__input popup__input-name" value="" placeholder="Имя" name="name" required
                minlength="2" maxlength="40" autocomplete="off" />
              <span className="popup__error" id="name-error"></span>
              <input type="text" className="popup__input popup__input-job" value="" placeholder="О себе" name="link" required
                minlength="2" maxlength="200" autocomplete="off" />
              <span className="popup__error" id="link-error"></span>
              <button type="submit" className="popup__submit-button popup__submit-button_disabled" disabled>Сохранить</button>
            </form>
          </div>
        </div>

        {/* Popup Add element */}

        <div className="popup popup_add-element">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-icon"></button>
            <form action="#" className="popup__inputs" name="popup" novalidate>
              <h2 className="popup__heading">Новое место</h2>
              <input type="text" className="popup__input popup__input-place" value="" placeholder="Название" name="name" required
                minlength="1" maxlength="30" autocomplete="off" />
              <span className="popup__error" id="name-error"></span>
              <input type="url" className="popup__input popup__input-link" value="" placeholder="Ссылка на картинку" name="link"
                required autocomplete="off" />
              <span className="popup__error" id="link-error"></span>
              <button type="submit" className="popup__submit-button popup__submit-button_disabled" disabled>Создать</button>
            </form>
          </div>
        </div>

        {/* Popup Image */}

        <div className="popup popup_image popup_image-background">
          <div className="popup__overlay"></div>
          <div className="popup__container popup__container_image">
            <button className="popup__close-icon"></button>
            <img src="#" alt="Места-России" className="popup__image" />
            <h5 className="popup__title"></h5>
          </div>
        </div>

        {/* Element Tamplate */}

        <template className="elements__template" id="">
          <li className="elements__element">
            <button type="submit" className="elements__element-delete-button"></button>
            <img src="#" id="" alt="Места-России" className="elements__element-img" />
            <div className="elements__element-description">
              <h2 className="elements__element-title"></h2>
              <div className="elements__element-like-box">
                <button type="submit" className="elements__element-like"></button>
                <div className="elements__element-likes">0</div>
              </div>
            </div>
          </li>
        </template>

        {/* Popup Edit-ava */}

        <div className="popup popup_edit-avatar">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-icon"></button>
            <form action="#" className="popup__inputs" name="popup" novalidate>
              <h2 className="popup__heading">Обновить аватар</h2>
              <input type="url" className="popup__input popup__input-link" value="" placeholder="Ссылка на новый аватар"
                name="link" required autocomplete="off" />
              <span className="popup__error" id="link-error"></span>
              <button type="submit" className="popup__submit-button popup__submit-button_disabled" disabled>Сохранить</button>
            </form>
          </div>
        </div>

        {/* Popup Remove-card */}

        <div className="popup popup_remove-card">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-icon"></button>
            <h2 className="popup__heading popup__heading_delete-card">Вы уверены?</h2>
            <button type="submit" className="popup__submit-button">Да</button>
          </div>
        </div>

      </body>


    </div>
  );
}

export default App;
