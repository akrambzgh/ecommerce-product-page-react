function Buy() {
  return (
    <div className="buy">
      <div className="count">
        <span>
          <img src="/../public/images/icon-minus.svg" alt="" />
        </span>
        <span>0</span>
        <span>
          <img src="/../public/images/icon-plus.svg" alt="" />
        </span>
      </div>
      <div className="buy-button">
        <button className="buy-btn">Add to cart</button>
      </div>
    </div>
  );
}
export default Buy;
