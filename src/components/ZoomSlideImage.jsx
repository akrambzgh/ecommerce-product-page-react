/* eslint-disable react/prop-types */
function ZoomSlideImage(props) {
  let styles = {
    transform: `translateX(${props.length}%)`,
  };
  return (
    <div className={props.isShown ? "big-img show" : "big-img"}>
      <div className="close" onClick={props.closeZoom}>
        <img src="/images/icon-close.svg" alt="" />
      </div>
      <div className="main-img zoom">
        <div className="left-arrow" onClick={props.toLeft}>
          <img src="/images/icon-previous.svg" alt="" />
        </div>
        <div className="right-arrow" onClick={props.toRight}>
          <img src="/images/icon-next.svg" alt="" />
        </div>
        <div className="product-imgs" style={styles}>
          <img
            className="product-img"
            src="/images/image-product-1.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/images/image-product-2.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/images/image-product-3.jpg"
            alt=""
          />
          <img
            className="product-img"
            src="/images/image-product-4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default ZoomSlideImage;
