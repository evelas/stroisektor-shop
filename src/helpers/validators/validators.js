export const required = (value) => {
  if (value) return undefined;
  return 'Вы не заполнили это поле';
};

export const requiredSelect = (value) => {
  if (value === 'Выбор оплаты' || value === 'Выбор доставки') return 'Вы не заполнили это поле';
  return undefined;
};

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    if (value.length > maxLength) return `max length is ${maxLength}`;
    return undefined;
  };
};
