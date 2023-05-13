(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationConfig=e,this._element=n}var n,o;return n=t,(o=[{key:"_showInputError",value:function(t,e){var n=this._element.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationConfig.inputErrorClass),n.textContent=e,n.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._element.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationConfig.inputErrorClass),e.classList.remove(this._validationConfig.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._element.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._element.querySelector(this._validationConfig.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationConfig.activeButton),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationConfig.activeButton),this._buttonElement.disabled=!1)}},{key:"enableValidation",value:function(){this._element.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var i=function(){function t(e,n,o,r,i,u,a){var c=e.link,l=e.name,s=e.likes,p=void 0===s?[]:s,f=e._id,y=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=c,this._name=l,this._likes=p,this._counter=p.length,this._id=f,this._owner=y._id,this._cardSelector=n,this._handleCardClick=o,this._dislakeCard=r,this._likeCards=i,this._confirmButtonDeleteCard=u,this._myId=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_checkLikes",value:function(t){var e=this;return t.some((function(t){return t._id===e._myId}))}},{key:"_counterLikesCard",value:function(){return this._counterLikes}},{key:"_setLikeOnServer",value:function(){this._checkLikes(this._likes)?this._dislakeCard(this,this._id):this._likeCards(this,this._id)}},{key:"displayLikes",value:function(t){this._likes=t,this._counterLikes.textContent=this._likes.length,this._checkLikes(t)?this._buttonLike.classList.add("cards__like-button_active"):this._buttonLike.classList.remove("cards__like-button_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".cards__photo"),this._buttonLike=this._element.querySelector(".cards__like-button"),this._buttonDelete=this._element.querySelector(".cards__removal"),this._counterLikes=this._element.querySelector(".cards__like-counter"),this._setEventListeners(),this.displayLikes(this._likes),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".cards__title").textContent=this._name,this._owner===this._myId||(this._buttonDelete.style.display="none"),this._element}},{key:"_toggleLike",value:function(){this._buttonLike.classList.toggle("cards__like-button_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._setLikeOnServer()})),this._buttonDelete.addEventListener("click",(function(){t._confirmButtonDeleteCard(t,t._id)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===u(r)?r:String(r)),o)}var r}var c=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===l(r)?r:String(r)),o)}var r}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close-btn").addEventListener("click",(function(){t.closePopup()})),this._popup.addEventListener("click",(function(e){e.target===t._popup&&t.closePopup()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===f(r)?r:String(r)),o)}var r}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},h.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(o);if(r){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__picture"),e._popupCaption=e._popup.querySelector(".popup__signature"),e}return e=u,(n=[{key:"openPopup",value:function(t,e){this._popupCaption.textContent=t,this._popupImg.src=e,this._popupImg.alt=t,h(d(u.prototype),"openPopup",this).call(this)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===m(r)?r:String(r)),o)}var r}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(o);if(r){var n=k(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._form=n._popup.querySelector(".popup__form"),n._inputElements=n._popup.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"_getInputValues",value:function(){for(var t={},e=0;e<this._inputElements.length;e++){var n=this._inputElements.item(e);t[n.name]=n.value}return t}},{key:"setEventListeners",value:function(){var t=this;this._data=this._getInputValues,this._form.addEventListener("submit",(function(e){t._submitForm(e,t._data())})),g(k(u.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._form.reset(),g(k(u.prototype),"closePopup",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==P(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===P(r)?r:String(r)),o)}var r}var O=function(){function t(e){var n=e.profileName,o=e.profileActivity,r=e.profileAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._activity=document.querySelector(o),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,activity:this._activity.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._activity.textContent=n}},{key:"setAvatarLink",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===L(r)?r:String(r)),o)}var r}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._authorization=e.headers.authorization,this._contentType=e.headers["Content-Type"]}var e,n;return e=t,(n=[{key:"_getReportData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"loadingUserInfoOnServer",value:function(t){var e=this,n=t.name,o=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:n,about:o})}).then((function(t){return e._getReportData(t)}))}},{key:"initCardsFromServer",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._getReportData(e)}))}},{key:"initialUsers",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._getReportData(e)}))}},{key:"loadingNewCardOnServer",value:function(t){var e=this,n=t.name,o=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:n,link:o})}).then((function(t){return e._getReportData(t)}))}},{key:"deleteCardFromServer",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._getReportData(t)}))}},{key:"likeCards",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){return e._getReportData(t)}))}},{key:"dislikeCards",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return e._getReportData(t)}))}},{key:"loadigNewAvatarOnServer",value:function(t){var e=this,n=t.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:n})}).then((function(t){return e._getReportData(t)}))}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==T(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===T(r)?r:String(r)),o)}var r}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},I.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var B,U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(o);if(r){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteCardFromServer=e,n}return e=u,(n=[{key:"openPopup",value:function(t,e){I(D(u.prototype),"openPopup",this).call(this),this._card=t,this._cardId=e}},{key:"deleteEventListener",value:function(){var t=this;this._popup.querySelector(".popup__form_confirm").addEventListener("submit",(function(e){t._deleteCardFromServer(e,t._card,t._cardId)}))}},{key:"closePopup",value:function(){this._popup.querySelector(".popup__form_confirm").reset(),I(D(u.prototype),"closePopup",this).call(this)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inputErrorClass:"popup__input_error",errorClass:"popup__error_visible",elements:".cards__list",profileName:".profile__name",profileActivity:".profile__activity",profileAvatar:".profile__avatar",popupAvatar:".popup__input_content_avatar",popupAppellation:".popup__input_content_appellation",popupLink:".popup__input_content_link",formLoading:".popup__loading"},A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar-edit"),V=document.querySelector(".popup__form_profile"),F=document.querySelector(".popup__form_cards-add"),J=document.querySelector(".popup__form_editing-avatar"),G=document.querySelector(".popup_editing"),H=document.querySelector(".popup_editing-avatar"),M=document.querySelector(".popup_cards-add"),K=document.querySelector(".popup__input_content_name"),Q=document.querySelector(".popup__input_content_activity"),W=new n(z,V),X=new n(z,F),Y=new n(z,J),Z=new c({renderer:function(t){Z.addItem(at(t))}},z.elements),$=new w(".popup_editing",(function(t,e){t.preventDefault(),pt(!0,G),function(t){ct.loadingUserInfoOnServer({name:t.name,about:t.about}).then((function(t){rt.setUserInfo(t),$.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){pt(!1,G)}))}(e)})),tt=new w(".popup_cards-add",(function(t,e){t.preventDefault(),pt(!0,M),function(t){ct.loadingNewCardOnServer(t).then((function(t){Z.addItem(at(t,t.owner)),tt.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){pt(!1,M)}))}(e),X.toggleButtonState()})),et=new _(".popup_view-picture"),nt=new U(".popup_confirm",(function(t,e,n){t.preventDefault(),function(t,e){ct.deleteCardFromServer(e).then((function(){t.deleteCard(),nt.closePopup(t,e)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}(e,n)})),ot=new w(".popup_editing-avatar",(function(t,e){t.preventDefault(),pt(!0,H),function(t){ct.loadigNewAvatarOnServer(t).then((function(t){rt.setAvatarLink(t),ot.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){pt(!1,H)}))}(e),Y.toggleButtonState()})),rt=new O(z);function it(t,e){nt.openPopup(t,e),nt.deleteEventListener()}function ut(t,e){et.openPopup(t,e)}function at(t){return new i(t,".cards-template",ut,st,lt,it,B).generateCard()}A.addEventListener("click",(function(){var t=rt.getUserInfo();K.value=t.name,Q.value=t.activity,W.toggleButtonState(),$.openPopup()})),x.addEventListener("click",(function(){tt.openPopup(),X.toggleButtonState()})),N.addEventListener("click",(function(){Y.toggleButtonState(),ot.openPopup()})),nt.setEventListeners(),$.setEventListeners(),tt.setEventListeners(),et.setEventListeners(),ot.setEventListeners();var ct=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"bdaf5f64-aca0-47b5-811d-20bc0a7efcbb","Content-Type":"application/json"}});function lt(t,e){ct.likeCards(e).then((function(e){t.displayLikes(e.likes)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}function st(t,e){ct.dislikeCards(e).then((function(e){t.displayLikes(e.likes)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}function pt(t,e){t?(e.querySelector(z.formLoading).classList.add("popup__loading_visible"),e.querySelector(z.submitButtonSelector).classList.add("popup__save-btn_hidden")):(e.querySelector(z.formLoading).classList.remove("popup__loading_visible"),e.querySelector(z.submitButtonSelector).classList.remove("popup__save-btn_hidden"))}Promise.all([ct.initialUsers(),ct.initCardsFromServer()]).then((function(t){rt.setUserInfo(t[0]),rt.setAvatarLink(t[0]),B=t[0]._id,Z.renderItems(t[1].reverse())})).catch((function(t){console.log("Ошибка: ".concat(t))})),et.setEventListeners(),W.enableValidation(),X.enableValidation(),W.toggleButtonState(),X.toggleButtonState(),Y.enableValidation(),Y.toggleButtonState()})();
//# sourceMappingURL=main.js.map