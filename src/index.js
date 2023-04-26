import './index.css';

import FormValidator from './components/FormValidator';
import {initialCards} from './utils//initialcards.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import { arrayValidation, buttonPopupOpenedEditing, buttonPopupOpenedCardsAdd, formEdit, formCardsAdd } from './utils/constants.js';


// const formEdit = document.querySelector('.popup__form_profile');

// const formCardsAdd = document.querySelector('.popup__form_cards-add');

// const popupEditing = document.querySelector('.popup_editing');
// const buttonPopupOpenedEditing = document.querySelector('.profile__edit-button');
// const buttonPopupCloseEditing = popupEditing.querySelector('.popup__close-btn_editing');

// const popupCardsAdd = document.querySelector('.popup_cards-add');
// const buttonPopupOpenedCardsAdd = document.querySelector('.profile__add-button');

// const inputName = popupEditing.querySelector('.popup__input_content_name');
// const inputActivity = popupEditing.querySelector('.popup__input_content_activity');

// const profileName = document.querySelector('.profile__name');
// const profileActivity = document.querySelector('.profile__activity');

// const cardsList = document.querySelector('.cards__list');

// const photo = document.querySelector('.popup__input_content_link');
// const appellation = document.querySelector('.popup__input_content_appellation');

// const buttonCloseList = document.querySelectorAll('.popup__close-btn');

// const popupSignature = document.querySelector('.popup__signature');
// const popupPicture = document.querySelector('.popup__picture');

// const popupVievPicture = document.querySelector('.popup_view-picture');

const validationProfile = new FormValidator(arrayValidation, formEdit);
const validationAddCard = new FormValidator(arrayValidation, formCardsAdd);


const addSection = new Section({
  items: initialCards,
  renderer: (item) => {
    addSection.addItem(renderCards(item));
  },
},
  arrayValidation.elements
);

const popupEditing = new PopupWithForm('.popup_editing', handleProfileForm);

const popupCardsAdd = new PopupWithForm('.popup_cards-add', handleEditCards);

const popupVievPicture = new PopupWithImage('.popup_view-picture');

const userInfo = new UserInfo(arrayValidation);

const inputName = formEdit.elements.name;
const inputActivity = formEdit.elements.activity;

function handleCardClick(elementImage) {
  popupVievPicture.openPopup(elementImage);
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
  validationAddCard.toggleButtonState();
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
  formCardsAdd.reset();
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


// function handlePopupDefault(evt) {
//   evt.preventDefault();
// }

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEscape);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEscape);
// }

// function closePopupEscape(event) {
//   if (event.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'));
//   }
// }

// function openPopupVievPicture(name, link) {
//   popupSignature.textContent = name;
//   popupPicture.alt = name;
//   popupPicture.src = link;
//   openPopup(popupVievPicture);
// }

// function openPopupEdit() {
//   openPopup(popupEditing);
// }

// function closePopupEdit() {
//   closePopup(popupEditing);
// }

// function handleOpenedPopupClickEdit() {
//   inputName.value = profileName.textContent;
//   inputActivity.value = profileActivity.textContent;
// }

// function handleOverlayClickEdit(event) {
//   if (event.target === event.currentTarget) {
//     closePopup(popupEditing);
//   }
// }


// function handleFormSubmit() {
//   profileName.textContent = inputName.value;
//   profileActivity.textContent = inputActivity.value;
// }

// function openPopupCardsAdd() {
//   openPopup(popupCardsAdd);
// }

// function closePopupCardsAdd() {
//   closePopup(popupCardsAdd);
// }

// function handleOverlayClickCardsAdd(event) {
//   if (event.target === event.currentTarget) {
//     closePopupCardsAdd();
//   }
// }

// function renderCards(cardElement) {
//   cardsList.prepend(cardElement);
// }

// function createCard(item) {
//   const card = new Card(item, '.cards-template', openPopupVievPicture);
//   const cardElement = card.generateCard();

//   return cardElement;
// }

// initialCards.forEach((cardElement) => {
//   renderCards(createCard(cardElement));
// });

// validationProfile.enableValidation();
// validationProfile.toggleButtonState();

// validationAddCard.enableValidation();
// validationAddCard.toggleButtonState();


// buttonPopupOpenedEditing.addEventListener('click', () => {
//   validationProfile.toggleButtonState();
//   validationProfile.resetValidation();
//   openPopupEdit();
//   handleOpenedPopupClickEdit();
// });

// formEdit.addEventListener('submit', (evt) => {
//   handlePopupDefault(evt);
//   handleFormSubmit();
//   openPopupEdit();
//   closePopupEdit();
// });

// buttonPopupOpenedCardsAdd.addEventListener('click', () => {
//   openPopupCardsAdd();
// });

// formCardsAdd.addEventListener('submit', function (event) {
//   handlePopupDefault(event);


//   const inputValue = { name: appellation.value, link: photo.value };

//   renderCards(createCard(inputValue));

//   event.target.reset();

//   validationAddCard.resetValidation();

//   closePopupCardsAdd();
// });


// buttonCloseList.forEach((btn) => {
//   const popup = btn.closest('.popup');
//   btn.addEventListener('click', () => closePopup(popup));
//   popup.addEventListener('mousedown', (event) => {
//     if (event.target === event.currentTarget) {
//       closePopup(popup);
//     }
//   });
// });




