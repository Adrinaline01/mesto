export class Card {
  constructor(data) {
    this._link = data.link;
    this._name = data.name;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.cards-template')
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._buttonOpenPicture = this._element.querySelector('.cards__photo');
    this._buttonLike = this._element.querySelector('.cards__like');
    this._buttonDelete = this._element.querySelector('.cards__removal');

    this._setEventListeners();

    this._element.querySelector('.cards__photo').src = this._link;
    this._element.querySelector('.cards__photo').alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;


    return this._element;
  }

  _likeCard() {
    this._buttonLike.classList.toggle('cards__like_acrive');
  }

  _deleteCard(evt) {
    this._buttonDelete = evt.target.closest('.cards__item');

    this._buttonDelete.remove();
  }

  _openPopupImage() {
    document.querySelector('.popup__picture').src = this._link;
    document.querySelector('.popup__signature').textContent = this._name;
    document.querySelector('.popup_view-picture').classList.add('popup_opened');
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._likeCard();
    });

    this._buttonDelete.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    this._buttonOpenPicture.addEventListener('click', () => {
      this._openPopupImage();
    })
  }

}
