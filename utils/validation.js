const types = {
  phone: {
    regExp: /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    textError: 'Некорректный формат номера телефона',
  },
  email: {
    regExp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    textError: 'Некорректный адрес электронной почты',
  },
};

export default function validateInput({ type, value, isRequired }) {
  if (!isRequired && !value.length) {
    return {
      isValid: true,
      textError: '',
      isRequired,
    };
  }
  if (isRequired && !value.length) {
    return {
      isValid: true,
      textError: 'Пожалуйста, заполните необходимые поля',
      isRequired,
    };
  }
  if (type === null) {
    return {
      isValid: true,
      textError: '',
      isRequired,
    };
  }
  
  return {
    isValid: Boolean(types[type].regExp.test(value)),
    textError: Boolean(types[type].regExp.test(value)) === false ? types[type].textError : '',
    isRequired,
  };
}
