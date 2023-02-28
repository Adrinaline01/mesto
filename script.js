let formElement = document.querySelector('.popup__profile-editing');

let popup = document.querySelector('.popup');
let openedPopup = document.querySelector('.profile__edit-button');
let closePopup = popup.querySelector('.popup__close-btn');

let inputName = popup.querySelector('.popup__input_content_name');
let inputActivity = popup.querySelector('.popup__input_content_activity');

let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');


function toggleOpenedPopup () {
  popup.classList.toggle('popup_opened');
}

function handleOpenedPopupClick () {
  toggleOpenedPopup();
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function handleClosePopupClick () {
  toggleOpenedPopup();
}

function handleOverlayClick (event) {
  if (event.target === event.currentTarget) {
    toggleOpenedPopup();
  }
}

function handleFormSubmit (evt) {
    evt.preventDefault();
  
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    toggleOpenedPopup();
  }

openedPopup.addEventListener('click', handleOpenedPopupClick);
closePopup.addEventListener('click', handleClosePopupClick);
popup.addEventListener('click', handleOverlayClick);
formElement.addEventListener('submit', handleFormSubmit);