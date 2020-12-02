import React from 'react';

function Main() {
  return (
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
  );
}

export default Main;