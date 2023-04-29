import './index.css';

import FormValidator from '../components/FormValidator.js';
import {initialCards} from '../utils//initialcards.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { arrayValidation, buttonPopupOpenedEditing, buttonPopupOpenedCardsAdd, formEdit, formCardsAdd } from '../utils/constants.js';


const validationProfile = new FormValidator(arrayValidation, formEdit);
const validationAddCard = new FormValidator(arrayValidation, formCardsAdd);


const addSection = new Section({
  items: initialCards,
  renderer: (item) => {
    addSection.addItem(createCard(item));
  },
},
  arrayValidation.elements
);

const popupEditing = new PopupWithForm('.popup_editing', handleProfileForm);

const popupCardsAdd = new PopupWithForm('.popup_cards-add', handleEditCards);

const popupVievPicture = new PopupWithImage('.popup_view-picture');

const userInfo = new UserInfo(arrayValidation);

const inputName = formEdit.elements.name;
const inputActivity = formEdit.elements.about;

function handleCardClick(name, link) {
  popupVievPicture.openPopup(name, link);
}

function handleProfileForm(evt, data) {
  evt.preventDefault();
  userInfo.setUserInfo(data);
  popupEditing.closePopup();
}

function handleEditCards(evt, data) {
  evt.preventDefault();
  addSection.addItem(createCard(data));
  popupCardsAdd.closePopup();
}

buttonPopupOpenedEditing.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputActivity.value = data.activity;
  validationProfile.toggleButtonState();
  popupEditing.openPopup();
});

buttonPopupOpenedCardsAdd.addEventListener('click', () => {
  popupCardsAdd.openPopup();
  validationAddCard.toggleButtonState();
});

function createCard(item) {
  const card = new Card(item, '.cards-template', handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

addSection.renderItems();
popupEditing.setEventListeners();
popupCardsAdd.setEventListeners();
popupVievPicture.setEventListeners();
validationProfile.enableValidation();
validationAddCard.enableValidation();
validationProfile.toggleButtonState();
validationAddCard.toggleButtonState();