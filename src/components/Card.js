export default class Card {
  constructor({data, likes = [], _id, owner}, 
    cardSelector, 
    handleCardClick,
    dislikeCards,
    likeCards,
    buttonDeleteCard,
    myID
    ) {
    this._link = data.link;
    this._name = data.name;
    this._likes = likes;
    this._counter = likes.length;
    this._id = _id;
    this._owner = owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._dislakeCard = dislikeCards;
    this._likeCards = likeCards;
    this._buttonDeleteCard = buttonDeleteCard;
    this._myID = myID;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  _checkLikes(likes) {
    return likes.some(user => user._id === this._myId);
  }

  _counterLikesCard() {
    return this._counterLikes;
  }

  displayLikes(likes) {
    this._likes = likes;
    this._counterLikes = this._likes.length;
    this._counterLikes().textContent = this._counterLikes;
    if (this._checkLikes(likes)) {
      this._buttonLike.classList.add('cards__like-button_active');
    }
    else {
      this._buttonLike.classList.remove('cards__like-button_active');
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.cards__photo');
    this._buttonLike = this._element.querySelector('.cards__like-button');
    this._buttonDelete = this._element.querySelector('.cards__removal');

    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    return this._element;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('cards__like-button_active');
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
