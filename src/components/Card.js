export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.cards__photo');
    this._buttonLike = this._element.querySelector('.cards__like');
    this._buttonDelete = this._element.querySelector('.cards__removal');

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    return this._element;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('cards__like_acrive');
  }

  _deleteCard(evt) {
    this._buttonDelete = evt.target.closest('.cards__item');

    this._buttonDelete.remove();
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._toggleLike();
    });

    this._buttonDelete.addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

}
