// данный HOC больше не используется
import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from '../redux/reducers/cart';

export const withAddToCart = ( Component ) => {
    class AddCartComponent extends React.Component {
        handleAddProductToCart = (obj) => {
            this.props.addProductToCart(obj);
        };
        render() {
            return <Component cartItems={this.props.cartItems} onClickAddProduct={this.handleAddProductToCart}/>
        }
    }
    let mapStateToProps = (state) => {
        return {
            cartItems: state.cart.items
        }
    }
    const ConnectAddCartComponent = connect(mapStateToProps, {addProductToCart})(AddCartComponent);
    return ConnectAddCartComponent;
}

