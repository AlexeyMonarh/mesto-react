import { React, useEffect, useState } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CurrentIdCardContext } from '../contexts/CurrentIdCardContext';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup/AddPlacePopup';
import RemoveCardPopup from '../components/RemoveCardPopup/RemoveCardPopup';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../components/InfoTooltip/InfoTooltip';
import api from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setСurrentUser] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  useEffect(() => {

  }, []);

  // useEffect(()=>{

  // }, [loggedIn]);

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

  useEffect(() => {
    api.getUser().then((res) => {
      setСurrentUser(res);
    }).catch((res) => {
      console.log(`Ошибка: ${res.status}`);
    })
  }, []);

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      InfoTooltip.getConten(jwt).then((res) => {
        if (res) {
          let userData = {
            email: res.email,
            password: res.password,
          }
        }
      })
    }
  }

  function handleLogin() {
    setLoggedIn(true)
  }

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

  function setId(card) {
    setCurrentId(card._id)
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId).then(() => {
      const newList = cards.filter((c) => c._id !== cardId);
      setCards(newList);
      closeAllPopups();
    })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  }

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
      <CurrentIdCardContext.Provider value={currentId}>
        <div className="App">
          <Header />

          <Switch>
            <ProtectedRoute
              path="/"
              // component={Login}
              loggedIn={loggedIn}
            />

            <ProtectedRoute
              path="/my-profile"
              component={InfoTooltip}
              loggedIn={loggedIn}
              userData={userData}
            />


            <Route path="/sign-in">
              {/* <div className="loginContainer"> */}
              <Login handleLogin={handleLogin} tokenCheck={tokenCheck} />
              {/* </div> */}
            </Route>


            <Route path="/sign-up">
              {/* <div className="registerContainer"> */}
              <Register />
              {/* </div> */}
            </Route>

            <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>

            {/* <Route path="/my-profile">
              <InfoTooltip />
            </Route> */}


          </Switch>

          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onPopupDelete={handleDeleteCardClick}
            setId={setId}
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
      </CurrentIdCardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);