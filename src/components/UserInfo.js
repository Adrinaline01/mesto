export default class UserInfo {
  constructor({ inputName, inputActivity }) {
    this._name = document.querySelector(inputName);
    this._activity = document.querySelector(inputActivity);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const activity = this._activity.textContent;
    return {name, activity};
  }

  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._activity.textContent = about;
  }
}