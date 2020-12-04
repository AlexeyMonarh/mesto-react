import React from 'react';
import { useEffect, useState } from "react";
import api from '../../utils/api';
import Card from '../Card/Card';


function Main(props) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  useEffect(() => {
    api.getUser().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-hover" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}>
        </div>
        <div className="profile__info">
          <div className="profile__info-content">
            <h1 className="profile__info-name">{userName}</h1>
            <p className="profile__info-status">{userDescription}</p>
          </div>
          <button className="profile__info-edit-button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((data, _id) => {
            return (
              <Card key={_id} link={data.link} name={data.name} likes={data.likes} onCardClick={props.onCardClick} />
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;