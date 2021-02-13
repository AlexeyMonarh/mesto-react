import React from 'react';

function PopupWithForm(props) {
  // const infoTool = Object.create(props.infoTool, {
  //   value: 'massage',
  // });
  // console.log(props.infoTool)
  return (
    <div className={props.isOpen ? `popup popup_${props.name} popup_open` : `popup popup_${props.name}`}>
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container">
        <button className="popup__close-icon" onClick={props.onClose}></button>
        {props.div}
        <h2 className="popup__heading">{props.title}</h2>
        <form action="#" className={`popup__inputs ${props.selector}`} name={props.name} onSubmit={props.onSubmit}>
          {props.inputs}
          <button type="submit" className="popup__submit-button" onClick={props.onCardDelete}>{props.button}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;