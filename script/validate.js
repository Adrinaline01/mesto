const showInputError = (formElement, inputElement, arrayValidation) => {
  const {inputErrorClass, errorClass} = arrayValidation;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
}
  

const hideInputError = (formElement, inputElement, arrayValidation) => {
  const {inputErrorClass, errorClass} = arrayValidation;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, arrayValidation) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, arrayValidation);
  } else {
    hideInputError(formElement, inputElement, arrayValidation);
  }
};

const setEventListeners = (formElement, arrayValidation) => {
  const {inputSelector, submitButtonSelector, ...restConfig} = arrayValidation;

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(inputList, buttonElement);
    });
  });

  
};

const enableValidation = (arrayValidation) => {
  const {formSelector, ...restConfig} = arrayValidation;

  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  });
};

const hasInvalidInput = (inputList) => {
  
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
};

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  }
  else {
    buttonElement.disabled = false;
  }
};

const resetValidation = (formElement, arrayValidation) => {
  const {inputSelector, submitButtonSelector, ...restConfig} = arrayValidation;

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, restConfig);
  });
};