/* eslint-disable react/prop-types */
function Buy(props) {
  return (
    <div className="buy">
      <div className="count">
        <span onClick={props.decrement}>
          <img src="/images/icon-minus.svg" alt="" />
        </span>
        <span>{props.countNum}</span>
        <span onClick={props.increment}>
          <img src="/images/icon-plus.svg" alt="" />
        </span>
      </div>
      <div className="buy-button">
        <button className="buy-btn" onClick={props.buy}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Buy;
