import React from 'react';
import { useEffect, useState } from "react";
import api from '../utils/api'


function Main (props) {
   
  // const [userName, setUserName] = useState("#");
  // const [userDescription, setUserDescription] = useState("#");
  const [userAvatar, setUserAvatar] = useState("#");

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        // setUserName(res);
        // setUserDescription(res);
        setUserAvatar(res);
      })
      .catch((err) => {
        console.log("Произошла ошибка:", err);
      });
  }, []);
  
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-hover" onClick={props.onEditAvatar}>
            <img   src={userAvatar.avatar} alt="Ваш Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info" id="">
            <div className="profile__info-content">
              <h1 className="profile__info-name"></h1>
              <p className="profile__info-status"></p>
            </div>
            <button className="profile__info-edit-button" onClick={props.onEditProfile}></button>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section>
          <ul className="elements">
          </ul>
        </section>
      </main>
    );
  
}

export default Main;