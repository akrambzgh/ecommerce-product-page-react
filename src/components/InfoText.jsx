import Buy from "./Buy";

function InfoText() {
  return (
    <div className="info-text">
      <div className="text">
        <span>Sneaker Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price">
        <div className="discount">
          <h2 className="price">$125.00</h2>
          <span className="discount-percentage">50%</span>
        </div>
        <span className="full-price">$250.00</span>
      </div>
      <Buy />
    </div>
  );
}
export default InfoText;
