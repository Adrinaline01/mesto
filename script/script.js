import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialcards.js';
import { Card } from './Card.js';

const arrayValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_visible'
};

const formEdit = document.querySelector('.popup__form_profile')

const formCardsAdd = document.querySelector('.popup__form_cards-add');

const popupEditing = document.querySelector('.popup_editing');
const buttonPopupOpenedEditing = document.querySelector('.profile__edit-button');
const buttonPopupCloseEditing = popupEditing.querySelector('.popup__close-btn_editing');

const popupCardsAdd = document.querySelector('.popup_cards-add');
const buttonPopupOpenedCardsAdd = document.querySelector('.profile__add-button');

const inputName = popupEditing.querySelector('.popup__input_content_name');
const inputActivity = popupEditing.querySelector('.popup__input_content_activity');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const cardsList = document.querySelector('.cards__list');

const photo = document.querySelector('.popup__input_content_link');
const appellation = document.querySelector('.popup__input_content_appellation');

const buttonCloseList = document.querySelectorAll('.popup__close-btn');

const popupSignature = document.querySelector('.popup__signature');
const popupPicture = document.querySelector('.popup__picture');

const popupVievPicture = document.querySelector('.popup_view-picture');

const validationProfile = new FormValidator(arrayValidation, formEdit);
const validationAddCard = new FormValidator(arrayValidation, formCardsAdd);


function handlePopupDefault (evt) {
  evt.preventDefault();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

function closePopupEscape(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopupVievPicture(name, link) {
  popupSignature.textContent = name;
  popupPicture.alt = name;
  popupPicture.src = link;
  openPopup(popupVievPicture);
}

function openPopupEdit () {
  openPopup(popupEditing);
}

function closePopupEdit() {
  closePopup(popupEditing);
}

function handleOpenedPopupClickEdit () {
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function handleOverlayClickEdit (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupEditing);
  }
}


function handleFormSubmit () {
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
  }

function openPopupCardsAdd () {
  openPopup(popupCardsAdd);
}

function closePopupCardsAdd () {
  closePopup(popupCardsAdd);
}

function handleOverlayClickCardsAdd (event) {
  if (event.target === event.currentTarget) {
    closePopupCardsAdd();
  }
}

function renderCards (cardElement) { 
  cardsList.prepend(cardElement);
}

function createCard(item) {
  const card = new Card(item, '.cards-template', openPopupVievPicture);
  const cardElement = card.generateCard();

  return cardElement;
}

initialCards.forEach((cardElement) => {
  renderCards(createCard(cardElement));
});

validationProfile.enableValidation();
validationProfile.toggleButtonState();

validationAddCard.enableValidation();
validationAddCard.toggleButtonState();


buttonPopupOpenedEditing.addEventListener('click', () => {
  validationProfile.toggleButtonState();
  validationProfile.resetValidation();
  openPopupEdit();
  handleOpenedPopupClickEdit();
});

formEdit.addEventListener('submit', (evt) => {
  handlePopupDefault(evt);
  handleFormSubmit();
  openPopupEdit();
  closePopupEdit();
});

buttonPopupOpenedCardsAdd.addEventListener('click', () => {
  openPopupCardsAdd();
});

formCardsAdd.addEventListener('submit', function (event) {
  handlePopupDefault(event);


  const inputValue = {name: appellation.value, link: photo.value};

  renderCards(createCard(inputValue));

  event.target.reset();

  validationAddCard.resetValidation();

  closePopupCardsAdd();
});


buttonCloseList.forEach( (btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup)); 
  popup.addEventListener('mousedown',(event) => {
    if (event.target === event.currentTarget) { 
      closePopup(popup); 
    } 
  });
});




