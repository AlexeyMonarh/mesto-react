import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm';
import ImagePopup from '../components/ImagePopup/ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(props) {
    setSelectedCard({ link: props.link, name: props.name });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (

    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name='edit-avatar'
        title='Обновить аватар'
        button='Сохранить'
        children={
          <>
            <input type="url" className="popup__input popup__input-link" placeholder="Ссылка на новый аватар"
              name="link" />
            <span className="popup__error" id="link-error"></span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name='edit-profile'
        title='Редактировать профиль'
        button='Сохранить'
        children={
          <>
            <input type="text" className="popup__input popup__input-name" placeholder="Имя" name="name" required />
            <span className="popup__error" id="name-error"></span>
            <input type="text" className="popup__input popup__input-job" placeholder="О себе" name="link" required />
            <span className="popup__error" id="link-error"></span>
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name='add-element'
        title='Новое место'
        button='Создать'
        children={
          <>
            <input type="text" className="popup__input popup__input-place" placeholder="Название" name="name" required />
            <span className="popup__error" id="name-error"></span>
            <input type="url" className="popup__input popup__input-link" placeholder="Ссылка на картинку" name="link" />
            <span className="popup__error" id="link-error"></span>
          </>
        }
      />

      <PopupWithForm
        onClose={closeAllPopups}
        name='remove-card'
        title='Вы уверены?'
        button='Да'
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;