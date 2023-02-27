let popup = document.querySelector('.popup');
let openedPopup = document.querySelector('.edit-button');
let closePopup = popup.querySelector('.popup__close-btn');
let savePopup = popup.querySelector('.popup__save-btn');

let inputName = popup.querySelector('.popup__name');
let inputActivity = popup.querySelector('.popup__activity');

let profileName = document.querySelector('.name');
let profileActivity = document.querySelector('.activity');


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
popup.addEventListener('submit', handleFormSubmit);
savePopup.addEventListener('click', handleFormSubmit);







// let popup = document.querySelector('.popup');

// let nameField = document.querySelector('.name');

// let openPopup = document.querySelector('.edit-button');

// let nameInput = document.querySelector('.popup__name');
// let activityInput = document.querySelector('.popup__activity');

// let saveButton = document.querySelector('.popup__save-btn');
// let closeButton = document.querySelector('.popup__close-btn');

// function openedPopup () {
//   popup.classList.add('.popup_opended');
// }

// function handleFormSubmit (evt) {
//   evt.preventDefault();

//   let name = nameInput.value;
//   let activity = activityInput.value;

//   document.querySelector('.name').innerHTML = name;
// }

// openPopup.addEventListener('click', openedPopup);

// popup.addEventListener('submit', handleFormSubmit);
// saveButton.addEventListener('click', handleFormSubmit);


