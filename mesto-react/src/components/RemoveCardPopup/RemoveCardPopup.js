import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';

export default function RemoveCardPopup(props) {
  return (
    <PopupWithForm
    isOpen={props.isOpen}
    onClose={props.onClose}
    onCardDelete={props.onCardDelete}
    name='remove-card'
    title='Вы уверены?'
    button='Да'
  />
  )
}
