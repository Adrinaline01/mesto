import './index.css';

import FormValidator from '../components/FormValidator.js';
// import { initialCards } from '../utils//initialcards.js';
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
  popupEditingProfile,
  popupAvatarEditing,
  popupAddCards,
  inputContentName,
  inputContentActivity
} from '../utils/constants.js';


const validationProfile = new FormValidator(selectorAll, formEdit);
const validationAddCard = new FormValidator(selectorAll, formCardsAdd);
const validationEditAvatar = new FormValidator(selectorAll, formEditAvatar);


const addSection = new Section({
  renderer: (item, myId) => {
    addSection.addItem(createCard(item, myId));
  },
},
  selectorAll.elements
);

const popupEditing = new PopupWithForm('.popup_editing', handleProfileForm);
const popupCardsAdd = new PopupWithForm('.popup_cards-add', handleEditCards);
const popupVievPicture = new PopupWithImage('.popup_view-picture');
const popupConfirmDelete = new PopupWithConfirm('.popup_сonfirm', handleDeleteCard);
const popupEditingAvatar = new PopupWithForm('.popup_editing-avatar', handleAvatarEditing);

const userInfo = new UserInfo(selectorAll);

// const inputName = formEdit.elements.name;
// const inputActivity = formEdit.elements.about;

function confirmButtonDeleteCard(card, cardId) {
  popupConfirmDelete.openPopup(card, cardId);
  popupConfirmDelete.deleteEventListener();
}

function handleCardClick(name, link) {
  popupVievPicture.openPopup(name, link);
}

function handleProfileForm(evt, data) {
  evt.preventDefault();
  renderLoading(true, popupEditingProfile);
  loadingUserInfo(data);
}

function handleEditCards(evt, data) {
  evt.preventDefault();
  renderLoading(true. popupCardsAdd);
  loadingNewCard(data);
  validationAddCard.toggleButtonState();
}

function handleAvatarEditing(evt, data) {
  evt.preventDefault();
  renderLoading(true, popupEditAvatar);
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

function renderError(err) {
  result.textContent = '';
  error.textContent = err;
}

function createCard(item, myId) {
  const card = new Card(item, 
                        '.cards-template', 
                        handleCardClick,
                        dislikeCard,
                        likeCard,
                        confirmButtonDeleteCard,
                        myId);
  const cardElement = card.generateCard();

  return cardElement;
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'b9022504-2467-4a75-a987-32a0379324c9',
    'Content-Type': 'application/json'
  }
});

function initialAll() {
  Promise.all([api.initialUsers(), api.initialFromServer()])
    ,then((res) => {
      userInfo.setUserInfo(res[0]);
      userInfo.setAvatarLink(res[0]);
      addSection.renderItems(res[1].reverse(), res[0]);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    });
}

function deleteCardOnServer(card, cardId) {
  api.deleteCardFromServer(cardId)
    .then(() => {
      card.delereCard();
      popupConfirmDelete.closePopup(card, cardId);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    });
}

function likeCard(card, likeId) {
  api.likeCards(likeId)
    .then((res) => {
      card.displayLikes(res.likes);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    });
}

function dislikeCard(card, likeId) {
  api.dislikeCards(likeId)
    .then((res) => {
      card.showLikes(res.likes);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    });
}

function editingAvatar(avatar) {
  api.loadigNewAvatarOnServer({avatar})
    .then((res) => {
      userInfo.setAvatarLink(res);
      popupEditingAvatar.closePopup();
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, popupAvatarEditing);
    });
}

function loadingNewCard(data) {
  api.loadingNewCardOnServer({ name: data.title, link: data.link })
    .then((res) => {
      addSection.addItem(createCard(res, res.owner));
      popupCardsAdd.closePopup();
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, popupAddCards);
    });
}

function loadingUserInfo(data) {
  api.loadingUserInfoOnServer({ name: data.name, about: data.about })
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEditing.closePopup();
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, popupEditingProfile);
    });
}

function renderLoading(isLoading, popup) {
  if (isLoading) {
    popup.querySelector(selectorsAll.formLoading).classList.add('form__loading_visible');
    popup.querySelector(selectorsAll.submitButtonSelector).classList.add('popup__save-btn_visible');
  }
  else {
    popup.querySelector(selectorsAll.formLoading).classList.remove('form__loading_visible');
    popup.querySelector(selectorsAll.submitButtonSelector).classList.remove('popup__save-btn_visible');
  }
}


addSection.renderItems();
popupEditing.setEventListeners();
popupCardsAdd.setEventListeners();
popupVievPicture.setEventListeners();
validationProfile.enableValidation();
validationAddCard.enableValidation();
validationProfile.toggleButtonState();
validationAddCard.toggleButtonState();
validationEditAvatar.enableValidation();
validationEditAvatar.toggleButtonState();

popupConfirmDelete.setEventListeners();
popupEditing.setEventListeners();
popupCardsAdd.setEventListeners();
popupVievPicture.setEventListeners();
popupEditingAvatar.setEventListeners();

initialAll()
