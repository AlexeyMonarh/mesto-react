import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

export default function AddPlacePopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    // props.onUpdateAvatar({
    //   avatar: avaRef.current.value,
    // });
  } 

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='add-element'
      title='Новое место'
      button='Создать'
      inputs={
        <>
          <input type="text" className="popup__input popup__input-place" placeholder="Название" name="name" required />
          <span className="popup__error" id="name-error"></span>
          <input type="url" className="popup__input popup__input-link" placeholder="Ссылка на картинку" name="link" />
          <span className="popup__error" id="link-error"></span>
        </>
      }
    />
  )
}
