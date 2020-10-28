import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux/actions';

function useAddToCart(id, name, imgLink, price) {
  const dispatch = useDispatch();
  const cartItems = useSelector(({ cart }) => cart.items);
  const handleAddProductToCart = (obj) => {
    dispatch(cartActions.addProductToCart(obj));
  };
  const onAddProduct = () => {
    const obj = {
      id,
      name,
      imgLink,
      price,
    };
    handleAddProductToCart(obj);
  };

  return {
    cartItems,
    onAddProduct,
  };
}
export default useAddToCart;
