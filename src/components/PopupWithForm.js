import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._popupButton = this._popup.querySelector('.popup__save-btn')
    this._inputElements = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputElement = {};
    for (let i = 0; i < this._inputElements.length; i++) {
      const item = this._inputElements.item(i);
      inputElement[item.name] = item.value;
    }

    return inputElement;
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._popupButton.textContent = 'Сохранение...';
    }
    else{
      this._popupButton.textContent = 'Сохранить';
    }
  }

  setEventListeners() {
    this._data = this._getInputValues;
    this._form.addEventListener('submit', (evt) => {
      this._submitForm(evt, this._data());
    });
    super.setEventListeners();
  }

  closePopup() {
    this._form.reset();
    super.closePopup();
  }
}