/* eslint-disable react/prop-types */

function Cart() {
  let empty = true;
  return (
    <div className="cart">
      {empty && <h3 className="no-items-txt">Your Cart Is Empty</h3>}
      {!empty && (
        <div className="items">
          <div className="head">
            <h3>Cart</h3>
          </div>
          <div className="item">
            <div className="info">
              <img
                src="../../public/images/image-product-1-thumbnail.jpg"
                alt=""
              />
              <div className="info-text">
                <span>Fall Limited Edition Sneakers</span>
                <span className="price-calc">
                  $125.00 x<span>3</span>
                  <span className="full-price">$375.00</span>
                </span>
              </div>
              <div className="delete">
                <img src="../../public/images/icon-delete.svg" alt="" />
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
