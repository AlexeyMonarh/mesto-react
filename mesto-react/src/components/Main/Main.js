import React from 'react';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEditAvatarClick() {
    document.addEventListener('click', () => { document.querySelector('.popup_edit-avatar').classList.add('popup_open') });
  };

  handleEditProfileClick() {
    document.addEventListener('click', () => { document.querySelector('.popup_edit-profile').classList.add('popup_open') });
  };

  handleAddPlaceClick() {
    document.addEventListener('click', () => { document.querySelector('.popup_add-element').classList.add('popup_open') });
  };

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={this.handleEditAvatarClick}>
            <img src="#" alt="Ваш Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info" id="">
            <div className="profile__info-content">
              <h1 className="profile__info-name"></h1>
              <p className="profile__info-status"></p>
            </div>
            <button className="profile__info-edit-button" onClick={this.handleEditProfileClick}></button>
          </div>
          <button className="profile__add-button" onClick={this.handleAddPlaceClick}></button>
        </section>
        <section>
          <ul className="elements">
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;