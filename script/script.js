const formEdit = document.querySelector('.popup__form_profile');

const formCardsAdd = document.querySelector('.popup__form_cards-add');

const popupEditing = document.querySelector('.popup_editing');
const openedPopupEditing = document.querySelector('.profile__edit-button');
const closePopupEditing = popupEditing.querySelector('.popup__close-btn_editing');

const popupCardsAdd = document.querySelector('.popup_cards-add');
const openedPopupCardsAdd = document.querySelector('.profile__add-button');
const closePopupCardsAdd = popupCardsAdd.querySelector('.popup__close-btn_cards-add');

const inputName = popupEditing.querySelector('.popup__input_content_name');
const inputActivity = popupEditing.querySelector('.popup__input_content_activity');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const cardsList = document.querySelector('.cards__list');
const cardsTemplate = document.querySelector('.cards-template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function popupDefault (evt) {
  evt.preventDefault();
}


function toggleOpenedPopupEdit () {
  popupEditing.classList.toggle('popup_opened');
}


function handleOpenedPopupClickEdit () {
  toggleOpenedPopupEdit();
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function handleClosePopupClickEdit () {
  toggleOpenedPopupEdit();
}

function handleOverlayClickEdit (event) {
  if (event.target === event.currentTarget) {
    toggleOpenedPopupEdit();
  }
}


function handleFormSubmit (evt) {
    popupDefault(evt);
  
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    toggleOpenedPopupEdit();
  }

function handleOpenedPopupClickCardsAdd () {
  toggleOpenedPopupCardsAdd();
}

function toggleOpenedPopupCardsAdd () {
  popupCardsAdd.classList.toggle('popup_opened');
}
  
function handleClosePopupClickCardsAdd () {
  toggleOpenedPopupCardsAdd();
}

function handleOverlayClickCardsAdd (event) {
  if (event.target === event.currentTarget) {
    toggleOpenedPopupCardsAdd();
  }
}

function renderCards (cardsClone) {
  cardsList.prepend(cardsClone);
}

function createCards (item) {
  const cardsClone = cardsTemplate.cloneNode(true);

  cardsClone.querySelector('.cards__photo').src = item.link;
  cardsClone.querySelector('.cards__title').textContent = item.name;

  cardsClone.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_acrive');
  });

  cardsClone.querySelector('.cards__removal').addEventListener('click', function (evt) {
      const cardsItem = evt.target.closest('.cards__item');

      
      cardsItem.remove();
  });

  return cardsClone;
}

initialCards.forEach(function (item) {
  renderCards(createCards(item));
});

openedPopupEditing.addEventListener('click', handleOpenedPopupClickEdit);
closePopupEditing.addEventListener('click', handleClosePopupClickEdit);
popupEditing.addEventListener('click', handleOverlayClickEdit);
formEdit.addEventListener('submit', handleFormSubmit);

openedPopupCardsAdd.addEventListener('click', handleOpenedPopupClickCardsAdd);
closePopupCardsAdd.addEventListener('click', handleClosePopupClickCardsAdd);
popupCardsAdd.addEventListener('click', handleOverlayClickCardsAdd);

formCardsAdd.addEventListener('submit', function (event) {
  popupDefault(event);

  const photo = document.querySelector('.popup__input_content_link');
  const appellation = document.querySelector('.popup__input_content_appellation');

  const inputValue = {name: appellation.value, link: photo.value};

  renderCards(createCards(inputValue));

  photo.value = '';
  appellation.value = '';

  toggleOpenedPopupCardsAdd();
});