import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_open` : `popup popup_${props.name}`}>
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container">
        <button className="popup__close-icon" onClick={props.onClose}></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form action="#" className="popup__inputs" name={props.name}>
          {props.children}
        </form>
        <button type="submit" className="popup__submit-button">{props.button}</button>
      </div>
    </div>
  );
}

export default PopupWithForm;