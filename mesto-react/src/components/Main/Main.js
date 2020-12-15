import React from 'react';
import { useEffect, useState } from "react";
import api from '../../utils/api';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
  }

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  return (

    <main className="content">
      <section className="profile">
        <div className="profile__avatar-hover" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }}>
        </div>
        <div className="profile__info">
          <div className="profile__info-content">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <p className="profile__info-status">{currentUser.about}</p>
          </div>
          <button className="profile__info-edit-button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((data, _id) => {
            return (
              <Card
                key={_id}
                link={data.link}
                name={data.name}
                _id={data._id}
                likes={data.likes}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;