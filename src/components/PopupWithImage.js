import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__picture');
    this._popupСaption = this._popup.querySelector('.popup__signature');
  }

  openPopup(cardElement) {
    const popupPicture = cardElement.querySelector('.cards__photo');
    const popupSignature = cardElement.querySelector('.cards__title');

    this._popupСaption.textContent = popupSignature.textContent;
    this._popupImg.src = popupPicture.src;
    this._popupImg.alt = popupPicture.textContent;
    super.openPopup();
  }
}