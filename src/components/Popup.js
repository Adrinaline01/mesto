export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-btn').addEventListener('click', () => {
      this.closePopup();
    });

    this._popup.querySelector('.popup__close-btn').forEach( (btn) => {
      const popup = btn.closest('.popup');
      btn.addEventListener('click', () => this.closePopup()); 
      popup.addEventListener('mousedown',(event) => {
        if (event.target === event.currentTarget) { 
          this.closePopup(); 
        } 
      });
    });
  }
}