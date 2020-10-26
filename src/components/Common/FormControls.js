import React from 'react';
import classnames from 'classnames';

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  let hasError = touched && error;
  return (
    <div className="cart__item cart__item_input">
      <input
        className={classnames(null, {
          error: hasError === 'Вы не заполнили это поле',
        })}
        {...input}
        {...props}
      />
      {hasError ? (
        <span className="cart__required">{error}</span>
      ) : (
        <span className="cart__required cart__required_default">{props.info}</span>
      )}
    </div>
  );
};

export const Select = ({ input, meta: { touched, error }, children, ...props }) => {
  let hasError = touched && error;
  return (
    <div className="cart__item cart__item_input">
      <select
        className={classnames(null, {
          error: hasError === 'Вы не заполнили это поле',
        })}
        {...input}
        {...props}>
        {children}
      </select>
      {hasError ? (
        <span className="cart__required">{error}</span>
      ) : (
        <span className="cart__required cart__required_default">{props.info}</span>
      )}
    </div>
  );
};
