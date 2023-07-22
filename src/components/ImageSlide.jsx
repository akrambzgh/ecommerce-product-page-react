function ImageSlide() {
  return (
    <div className="prod-img">
      <div className="main-img">
        <div className="left-arrow">
          <img src="../../public/images/icon-previous.svg" alt="" />
        </div>
        <div className="right-arrow">
          <img src="../../public/images/icon-next.svg" alt="" />
        </div>
        <div className="product-imgs">
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
      <div className="thumbnails">
        <img src="./../public/images/image-product-1-thumbnail.jpg" alt="" />
        <img src="./../public/images/image-product-2-thumbnail.jpg" alt="" />
        <img src="./../public/images/image-product-3-thumbnail.jpg" alt="" />
        <img src="./../public/images/image-product-4-thumbnail.jpg" alt="" />
      </div>
    </div>
  );
}
export default ImageSlide;
