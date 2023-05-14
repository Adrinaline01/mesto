export default class Card {
  constructor({ link, name, likes = [], _id, owner },
    cardSelector, 
    handleCardClick,
    dislikeCards,
    likeCards,
    confirmButtonDeleteCard,
    myID
  ) {
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._counter = likes.length;
    this._id = _id;
    this._owner = owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._dislakeCard = dislikeCards;
    this._likeCards = likeCards;
    this._confirmButtonDeleteCard = confirmButtonDeleteCard;
    this._myId = myID;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
  }

  _checkLikes(likes) {
    return likes.some(user => user._id === this._myId);
  }

  _counterLikesCard() {
    return this._counterLikes;
  }

  _setLikeOnServer() {
    if (this._checkLikes(this._likes)) {
      this._dislakeCard(this, this._id);
    } else {
      this._likeCards(this, this._id);
    }
  }

  displayLikes(likes) {
    this._likes = likes;
    this._counterLikes.textContent = this._likes.length;
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
    this._counterLikes = this._element.querySelector('.cards__like-counter');

    this._setEventListeners();
    this.displayLikes(this._likes);

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.cards__title').textContent = this._name;

    if (this._owner === this._myId) {
      return this._element;
    } else {
      this._buttonDelete.classList.add('cards__removal_hidden');
      return this._element;
    }
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('cards__like-button_active');
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', () => {
      this._setLikeOnServer();
    });

    this._buttonDelete.addEventListener('click', () => {
      this._confirmButtonDeleteCard(this, this._id);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }

}