const formEdit = document.querySelector('.popup__form_profile');

const formCardsAdd = document.querySelector('.popup__form_cards-add');

const popupEditing = document.querySelector('.popup_editing');
const buttonPopupOpenedEditing = document.querySelector('.profile__edit-button');
const buttonPopupCloseEditing = popupEditing.querySelector('.popup__close-btn_editing');

const popupCardsAdd = document.querySelector('.popup_cards-add');
const buttonPopupOpenedCardsAdd = document.querySelector('.profile__add-button');
const buttonPopupCloseCardsAdd = popupCardsAdd.querySelector('.popup__close-btn_cards-add');

const inputName = popupEditing.querySelector('.popup__input_content_name');
const inputActivity = popupEditing.querySelector('.popup__input_content_activity');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const cardsList = document.querySelector('.cards__list');
const cardsTemplate = document.querySelector('.cards-template');

const popupViewPicture = document.querySelector('.popup_view-picture');
const popupPicture = document.querySelector('.popup__picture');
const popupSignature = document.querySelector('.popup__signature');
const buttonPopupCloseViewPicture = document.querySelector('.popup__close-btn_view-picture');

const photo = document.querySelector('.popup__input_content_link');
const appellation = document.querySelector('.popup__input_content_appellation');


function handlePopupDefault (evt) {
  evt.preventDefault();
}

function openPopup(popup) {
  popup.classList.toggle('popup_opened');
}

function closePopup(popup) {
  popup.classList.toggle('popup_opened');
}


function toggleOpenedPopupEdit () {
  openPopup(popupEditing);
}

function handleOpenedPopupClickEdit () {
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function handleClosePopupClickEdit () {
  closePopup(popupEditing);
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

function toggleOpenedPopupCardsAdd () {
  openPopup(popupCardsAdd);
}

function handleClosePopupClickCardsAdd () {
  toggleOpenedPopupCardsAdd();
}

function handleOverlayClickCardsAdd (event) {
  if (event.target === event.currentTarget) {
    toggleOpenedPopupCardsAdd();
  }
}

function toggleOpenedPopupViewPicture () {
  openPopup(popupViewPicture);
}

function handleOpenedPopupClickViewPicture (item, event) {
  popupPicture.src = item;
  popupPicture.alt = item;
  popupSignature.textContent = event;
}

function handleClosePopupClickViewPicture () {
  toggleOpenedPopupViewPicture();
}

function handleOverlayClickViewPicture (event) {
  if (event.target === event.currentTarget) {
    toggleOpenedPopupViewPicture();
  }
}

function renderCards (cardsClone) {
  cardsList.prepend(cardsClone);
}

function createCards (item) {
  const cardsClone = cardsTemplate.content.querySelector('.cards__item').cloneNode(true);

  const cardsCloneCardsPhoto = cardsClone.querySelector('.cards__photo');
  const cardsCloneCardsTitle = cardsClone.querySelector('.cards__title');

  cardsCloneCardsPhoto.src = item.link;
  cardsCloneCardsPhoto.alt = item.name;
  cardsCloneCardsTitle.textContent = item.name;

  cardsCloneCardsPhoto.addEventListener('click', function () {
    toggleOpenedPopupViewPicture();
    handleOpenedPopupClickViewPicture(item.link, item.name);
  });

  cardsClone.querySelector('.cards__like').addEventListener('click', function (evt) {
    const cardsLike = evt.target;

    cardsLike.classList.toggle('cards__like_acrive');
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

buttonPopupOpenedEditing.addEventListener('click', () => {
  toggleOpenedPopupEdit();
  handleOpenedPopupClickEdit();
});

buttonPopupCloseEditing.addEventListener('click', () => {
  handleClosePopupClickEdit();
});

popupEditing.addEventListener('click', (event) => {
  handleOverlayClickEdit(event);
});

formEdit.addEventListener('submit', (evt) => {
  handlePopupDefault(evt);
  handleFormSubmit();
  toggleOpenedPopupEdit();
});

buttonPopupOpenedCardsAdd.addEventListener('click', () => {
  toggleOpenedPopupCardsAdd();
});

buttonPopupCloseCardsAdd.addEventListener('click', () => {
  handleClosePopupClickCardsAdd ();
});

popupCardsAdd.addEventListener('click', (event) => {
  handleOverlayClickCardsAdd(event);
});

buttonPopupCloseViewPicture.addEventListener('click', handleClosePopupClickViewPicture);

popupViewPicture.addEventListener('click', (event) => {
  handleOverlayClickViewPicture(event);
});

formCardsAdd.addEventListener('submit', function (event) {
  handlePopupDefault(event);

  const inputValue = {name: appellation.value, link: photo.value};

  renderCards(createCards(inputValue));

  photo.value = '';
  appellation.value = '';

  toggleOpenedPopupCardsAdd();
});