import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select } from '../components/Common/FormControls';
import { required, requiredSelect } from '../helpers/validators/validators';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cartEmptyImage from './../assets/img/empty-cart.png';
import { Button } from '../components/';

import { map } from 'lodash';

function Order({ handleSubmit }) {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount ? (
          <form className="cart" onSubmit={handleSubmit}>
            <div className="cart__top">
              <h2 className="content__title">Оформление заказа</h2>
            </div>
            <div className="content__items content__items_order">
              <Field
                name="email"
                type="email"
                title="email"
                placeholder="email"
                component={Input}
                validate={[required]}
                info={'Это поле обязательно'}
              />
              <Field
                name="name"
                type="text"
                title="name"
                placeholder="name"
                component={Input}
                validate={[required]}
                info={'Это поле обязательно'}
              />
              <Field
                name="phone"
                type="number"
                title="phone"
                placeholder="Телефон"
                component={Input}
              />
              <Field
                name="delivery"
                component={Select}
                validate={[requiredSelect]}
                info={'Это поле обязательно'}>
                <option value="Выбор доставки" disabled>
                  Выбор доставки
                </option>
                <option value="Самовывоз">Самовывоз</option>
                <option value="Курьер">Курьер</option>
              </Field>
              <Field
                name="pay"
                component={Select}
                validate={[requiredSelect]}
                info={'Это поле обязательно'}>
                <option value="Выбор оплаты" disabled>
                  Выбор оплаты
                </option>
                <option value="Налом">Наличными при получении</option>
                <option value="Картой">Картой при получении</option>
              </Field>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего товаров: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/cart" className="button button--outline button--add go-back-btn">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Вернуться назад</span>
                </Link>
                <Button className="pay-btn">
                  <span>Подтвердить</span>
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <div className="cart cart--empty">
            <h2>
              Корзина пустая
              <i>
                <span role="img" aria-label="smile">
                  😕
                </span>
              </i>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё товар.
              <br />
              Для того, чтобы заказать товар, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />

            <span>Вернуться назад</span>
          </div>
        )}
      </div>
    </div>
  );
}

const OrderReduxForm = reduxForm({
  form: 'order',
  initialValues: { pay: 'Выбор оплаты', delivery: 'Выбор доставки' },
})(Order);

const OrderPage = (props) => {
  const { items } = useSelector(({ cart }) => cart);
  const order = map(items, (item) => {
    return map(item, (obj) => {
      return obj.name;
    });
  });
  const orderString = order.toString();

  const getOrderData = (formData) => {
    formData['orders'] = orderString;
    console.log(formData);
  };
  return <OrderReduxForm onSubmit={getOrderData} />;
};

export default OrderPage;
