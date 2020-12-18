import React from 'react';
import { useEffect, useState } from "react";
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from '../components/EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup/AddPlacePopup';
import RemoveCardPopup from '../components/RemoveCardPopup/RemoveCardPopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setСurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  function handleAddPlaceSubmit(data) {
    api.createNewCard(data).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(
      () => {
        api.getInitialCards().then((res) => {
          const newList = res.filter(arr => arr);
          setCards(newList);
          closeAllPopups();
        })
      }).catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  }

  useEffect(() => {
    api.getUser().then((res) => {
      setСurrentUser(res);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  function handleUpdateAvatar(data) {
    api.setAvatar(data)
      .then((res) => {
        setСurrentUser(res);
        closeAllPopups();
      }).catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data.name, data.about)
      .then((res) => {
        setСurrentUser(res);
        closeAllPopups();
      }).catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
}

function handleDeleteCardClick() {
  setIsDeletePopupOpen(true);
};

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
};

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
};

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
};

function handleCardClick(props) {
  setSelectedCard({ link: props.link, name: props.name });
}

function closeAllPopups() {
  setIsDeletePopupOpen(false)
  setIsEditProfilePopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setSelectedCard(false);
}

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onPopupDelete={handleDeleteCardClick}
        onCardDelete={handleCardDelete}
      />
      <Footer />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCreateCard={handleAddPlaceSubmit}
      />

      <RemoveCardPopup
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  </CurrentUserContext.Provider>
);
}

export default App;