import './index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { selectorAll,
  buttonPopupOpenedEditing, 
  buttonPopupOpenedCardsAdd, 
  buttonProfileAvatarEdit,
  formEdit, 
  formCardsAdd,
  formEditAvatar,
  inputContentName,
  inputContentActivity
} from '../utils/constants.js';

let userId;

const cardsTemplate = '.cards-template';

const validationProfile = new FormValidator(selectorAll, formEdit);
const validationAddCard = new FormValidator(selectorAll, formCardsAdd);
const validationEditAvatar = new FormValidator(selectorAll, formEditAvatar);


const addSection = new Section({
  renderer: (item) => {
    addSection.addItem(createCard(item));
  },
},
  selectorAll.elements
);

const popupEditing = new PopupWithForm('.popup_editing', handleProfileForm);
const popupCardsAdd = new PopupWithForm('.popup_cards-add', handleEditCards);
const popupVievPicture = new PopupWithImage('.popup_view-picture');
const popupConfirmDelete = new PopupWithConfirm('.popup_confirm', handleDeleteCard);
const popupEditingAvatar = new PopupWithForm('.popup_editing-avatar', handleAvatarEditing);

const userInfo = new UserInfo(selectorAll);

function confirmButtonDeleteCard(card, cardId) {
  popupConfirmDelete.openPopup(card, cardId);
  popupConfirmDelete.deleteEventListener();
}

function handleCardClick(name, link) {
  popupVievPicture.openPopup(name, link);
}

function handleProfileForm(evt, data) {
  evt.preventDefault();
  popupEditing.renderLoading(true);
  loadingUserInfo(data);
}

function handleEditCards(evt, data) {
  evt.preventDefault();
  popupCardsAdd.renderLoading(true);
  loadingNewCard(data);
  validationAddCard.toggleButtonState();
}

function handleAvatarEditing(evt, data) {
  evt.preventDefault();
  popupEditingAvatar.renderLoading(true);
  editingAvatar(data);
  validationEditAvatar.toggleButtonState();
}

function handleDeleteCard(evt, card, cardId) {
  evt.preventDefault();
  deleteCardOnServer(card, cardId);
}

buttonPopupOpenedEditing.addEventListener('click', () => {
  const data = userInfo.getUserInfo();

  inputContentName.value = data.name;
  inputContentActivity.value = data.activity;
  validationProfile.toggleButtonState();
  popupEditing.openPopup();
});

buttonPopupOpenedCardsAdd.addEventListener('click', () => {
  popupCardsAdd.openPopup();
  validationAddCard.toggleButtonState();
});

buttonProfileAvatarEdit.addEventListener('click', () => {
  validationEditAvatar.toggleButtonState();
  popupEditingAvatar.openPopup();
});

function createCard(item) {
  const card = new Card(item, 
                        cardsTemplate, 
                        handleCardClick,
                        dislikeCard,
                        likeCard,
                        confirmButtonDeleteCard,
                        userId);
  const cardElement = card.generateCard();

  return cardElement;
}

popupConfirmDelete.setEventListeners();
popupEditing.setEventListeners();
popupCardsAdd.setEventListeners();
popupVievPicture.setEventListeners();
popupEditingAvatar.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'bdaf5f64-aca0-47b5-811d-20bc0a7efcbb',
    'Content-Type': 'application/json'
  }
});

initialAll();

function initialAll() {
  Promise.all([api.initialUsers(), api.initCardsFromServer()])
    .then((res) => {
      userInfo.setUserInfo(res[0]);
      userInfo.setAvatarLink(res[0]);
      userId = res[0]._id;
      addSection.renderItems(res[1].reverse());
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function deleteCardOnServer(card, cardId) {
  api.deleteCardFromServer(cardId)
    .then(() => {
      card.deleteCard();
      popupConfirmDelete.closePopup(card, cardId);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function likeCard(card, likeId) {
  api.likeCards(likeId)
    .then((res) => {
      card.displayLikes(res.likes);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function dislikeCard(card, likeId) {
  api.dislikeCards(likeId)
    .then((res) => {
      card.displayLikes(res.likes);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function editingAvatar(data) {
  api.loadigNewAvatarOnServer(data)
    .then((res) => {
      userInfo.setAvatarLink(res);
      popupEditingAvatar.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditingAvatar.renderLoading(false);
    });
}

function loadingNewCard(data) {
  api.loadingNewCardOnServer(data)
    .then((res) => {
      addSection.addItem(createCard(res, res.owner));
      popupCardsAdd.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupCardsAdd.renderLoading(false);
    });
}

function loadingUserInfo(data) {
  api.loadingUserInfoOnServer({ name: data.name, about: data.about })
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEditing.closePopup();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupEditing.renderLoading(false);
    });
}

popupVievPicture.setEventListeners();
validationProfile.enableValidation();
validationAddCard.enableValidation();
validationProfile.toggleButtonState();
validationAddCard.toggleButtonState();
validationEditAvatar.enableValidation();
validationEditAvatar.toggleButtonState();


