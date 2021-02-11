import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import { CurrentIdCardContext } from '../../contexts/CurrentIdCardContext';

export default function RemoveCardPopup(props) {
  const currentId = React.useContext(CurrentIdCardContext);

  function handleDeleteClick() {
    props.onCardDelete(currentId);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onCardDelete={handleDeleteClick}
      name='remove-card'
      title='Вы уверены?'
      button='Да'
    />
  )
}
