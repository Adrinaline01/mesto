import Popup from "./Popup.js";


export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, deleteCardFromServer) {
    super(popupSelector);
    this._deleteCardFromServer = deleteCardFromServer;
  }

  openPopup(card, cardId) {
    super.openPopup();
    this._card = card;
    this._cardId = cardId;
  }

  deleteEventListener() {
    this._popup.querySelector('.popup__form_confirm').addEventListener('submit', (evt) => {
      this._deleteCardFromServer(evt, this._card, this._cardId);
    });
  }

  closePopup() {
    this._popup.querySelector('.popup__form_confirm').reset();
    super.closePopup();
  }
}