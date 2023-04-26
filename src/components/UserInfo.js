export default class UserInfo {
  constructor({ inputName, inputActivity }) {
    this._name = document.querySelector(inputName);
    this._activity = document.querySelector(inputActivity);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const activity = this._activity.textContent;
    const data = {name: name, activity: activity};
    return data;
  }

  setUserInfo(data) {
    const nameInput = data.name;
    const activityInput = data.activity;
    this._name.textContent = nameInput;
    this._activity.textContent = activityInput;
  }
}