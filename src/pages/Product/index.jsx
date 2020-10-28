import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { oneProductActions } from '../../redux/actions';
import { useAddToCart } from '../../customHooks';
import { Button } from '../../components';
import ProductLoaded from './ProductLoaded';

const Product = withRouter((props) => {
  const dispatch = useDispatch();
  const { product, isLoaded } = useSelector(({ oneProduct }) => oneProduct);
  const productId = props.match.params.productId;
  React.useEffect(() => {
    dispatch(oneProductActions.loadOneProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.productId]);

  // Хук добавления в корзину
  const addToCart = useAddToCart(product.id, product.name, product.imgLink, product.price);

  return (
    <div className="content">
      <div className="container container--product">
        <h1>{product.name}</h1>
        {isLoaded ? (
          <div className="product product_one">
            <div className="product__img product__img_max">
              <img src={product.imgLink} alt={product.name} />
            </div>
            <div className="product__info">
              {product.brand && (
                <p>
                  <b>Бренд: </b>
                  {product.brand}
                </p>
              )}
              {product.manufacturer && (
                <p>
                  <b>Производитель: </b>
                  {product.manufacturer}
                </p>
              )}
              {product.countryManufacturer && (
                <p>
                  <b>Страна производитель: </b>
                  {product.countryManufacturer}
                </p>
              )}
              {product.size && (
                <p>
                  <b>Объем/Вес: </b>
                  {product.size}
                </p>
              )}
              {product.meters && (
                <p>
                  <b>Метров в рулоне: </b>
                  {product.meters}
                </p>
              )}
              {product.width && (
                <p>
                  <b>Ширина: </b>
                  {product.width}
                </p>
              )}
              {product.shelfLife && (
                <p>
                  <b>Срок годности: </b>
                  {product.shelfLife}
                </p>
              )}
              {product.whereToUse && (
                <p>
                  <b>Область применения: </b>
                  {product.whereToUse}
                </p>
              )}
              {product.description && (
                <p>
                  <b>Описание: </b>
                  {product.description}
                </p>
              )}
              {product.price && (
                <div className="product__price product__price_max">
                  <span>{product.price} руб.</span>
                  <Button className="button--add" outline onClick={addToCart.onAddProduct}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                    {addToCart.cartItems[product.id] && (
                      <i>{addToCart.cartItems[product.id].length}</i>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="product__loaded">
            <ProductLoaded />
          </div>
        )}
      </div>
    </div>
  );
});

export default Product;
