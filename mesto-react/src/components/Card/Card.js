import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = props._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
);
// console.log(props.likes)
// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = props.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `...`;

function handleLikeClick() {
  props.onCardLike(props)
}

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="elements__element">
      <button type="submit" className="elements__element-delete-button"></button>
      <img src={props.link} id="" alt="Места-России" className="elements__element-img" onClick={handleClick} />
      <div className="elements__element-description">
        <h2 className="elements__element-title">{props.name}</h2>
        <div className="elements__element-like-box">
          <button type="submit" className="elements__element-like" onClick={handleLikeClick}></button>
          <div className="elements__element-likes">{props.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card;