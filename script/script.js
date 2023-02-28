const formElement = document.querySelector('.popup__profile-editing');

const popup = document.querySelector('.popup');
const openedPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__close-btn');

const inputName = popup.querySelector('.popup__input_content_name');
const inputActivity = popup.querySelector('.popup__input_content_activity');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');


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