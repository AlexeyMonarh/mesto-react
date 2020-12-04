import React from 'react';

function Card(props) {

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
          <button type="submit" className="elements__element-like"></button>
          <div className="elements__element-likes">{props.likes.length}</div>
        </div>
      </div>
    </li>
  )
}

export default Card;