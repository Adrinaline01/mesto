export default class UserInfo {
  constructor({ profileName, profileActivity, profileAvatar }) {
    this._name = document.querySelector(profileName);
    this._activity = document.querySelector(profileActivity);
    this._avatar = document.querySelector(profileAvatar);
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