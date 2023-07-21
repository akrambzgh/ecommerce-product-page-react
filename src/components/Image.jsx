function Image() {
  return (
    <div className="prod-img">
      <div className="main-img">
        <div className="left-arrow">
          <img src="../../public/images/icon-previous.svg" alt="" />
        </div>
        <div className="right-arrow">
          <img src="../../public/images/icon-next.svg" alt="" />
        </div>
        <img src="/../public/images/image-product-1.jpg" alt="" />
      </div>
      <div className="thumbnails">
        <div className="thumbnail">
          <img src="./../public/images/image-product-1-thumbnail.jpg" alt="" />
        </div>
        <div className="thumbnail">
          <img src="./../public/images/image-product-2-thumbnail.jpg" alt="" />
        </div>
        <div className="thumbnail">
          <img src="./../public/images/image-product-3-thumbnail.jpg" alt="" />
        </div>
        <div className="thumbnail">
          <img src="./../public/images/image-product-4-thumbnail.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Image;
