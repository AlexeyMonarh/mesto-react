import React from 'react'

class ImagePopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.card ? `popup popup_${this.props.card} popup_image-background popup_open` : `popup popup_${this.props.card} popup_image-background`}>
        <div className="popup__overlay" onClick={this.props.onClose}></div>
        <div className="popup__container popup__container_image">
          <button className="popup__close-icon" onClick={this.props.onClose}></button>
          <img src={this.props.card.link} alt="Места-России" className="popup__image" />
          <h5 className="popup__title">{this.props.card.name}</h5>
        </div>
      </div>
    )
  }
}

export default ImagePopup;