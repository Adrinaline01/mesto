export default class UserInfo {
  constructor({ inputName, inputActivity, inputAvatar }) {
    this._name = document.querySelector(inputName);
    this._activity = document.querySelector(inputActivity);
    this._avatar = document.querySelector(inputActivity);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const activity = this._activity.textContent;
    const avatar = this._avatar.src;
    return {name, activity, avatar};
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._activity.textContent = about;
  }

  setAvatarLink({ avatar }) {
    this._avatar.src = avatar;
  }
}