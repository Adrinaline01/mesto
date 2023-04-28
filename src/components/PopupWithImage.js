import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__picture');
    this._popupCaption = this._popup.querySelector('.popup__signature');
  }

  openPopup(name, link) {
    this._popupCaption.textContent = name;
    this._popupImg.src = link;
    this._popupImg.alt = name;
    super.openPopup();
  }
}