/* eslint-disable react/prop-types */
function ImageSlide(props) {
  let styles = {
    transform: `translateX(${props.length}%)`,
  };
  return (
    <div className="prod-img">
      <div className="main-img">
        <div className="left-arrow" onClick={props.toLeft}>
          <img src="../../public/images/icon-previous.svg" alt="" />
        </div>
        <div className="right-arrow" onClick={props.toRight}>
          <img src="../../public/images/icon-next.svg" alt="" />
        </div>
        <div className="product-imgs" style={styles}>
          <img
            className="product-img"
            src="/../public/images/image-product-1.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/../public/images/image-product-2.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/../public/images/image-product-3.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/../public/images/image-product-4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default ImageSlide;
