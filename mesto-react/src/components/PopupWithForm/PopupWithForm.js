import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={this.props.isOpen ? `popup popup_${this.props.name} popup_open` : `popup popup_${this.props.name}`}>
        <div className="popup__overlay" onClick={this.props.onClose}></div>
        <div className="popup__container">
          <button className="popup__close-icon" onClick={this.props.onClose}></button>
          <h2 className="popup__heading">{this.props.title}</h2>
          <form action="#" className="popup__inputs" name={this.props.name}>
            {this.props.children}
          </form>
          <button type="submit" className="popup__submit-button">{this.props.button}</button>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;