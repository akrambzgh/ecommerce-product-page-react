/* eslint-disable react/prop-types */

function Cart(props) {
  return (
    <div className={props.isShown ? "cart show" : "cart"}>
      {!props.cart && <h3 className="no-items-txt">Your Cart Is Empty</h3>}
      {props.cart && (
        <div className="items">
          <div className="head">
            <h3>Cart</h3>
          </div>
          <div className="item">
            <div className="info">
              <img src="/images/image-product-1-thumbnail.jpg" alt="" />
              <div className="info-text">
                <span>Fall Limited Edition Sneakers</span>
                <span className="price-calc">
                  $125.00 x<span>{props.numberOfChoose}</span>
                  <span className="full-price">{props.totalPrice}</span>
                </span>
              </div>
              <div className="delete" onClick={props.handleDelete}>
                <img src="/images/icon-delete.svg" alt="" />
              </div>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
