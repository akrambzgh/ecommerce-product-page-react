/* eslint-disable react/prop-types */
import Cart from "./Cart";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="humburgur" onClick={props.showList}>
            <img src="../../public/images/icon-menu.svg" alt="" />
          </div>
          <img src="../../public/images/logo.svg" alt="" />
          <ul className={props.isShown ? "show" : ""}>
            <img
              src="../../public/images/icon-close.svg"
              onClick={props.hideList}
              alt=""
            />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="serviece">
          <div className="cart-ico">
            <img
              src="../../public/images/icon-cart.svg"
              alt=""
              onClick={props.handleToglle}
            />
            <Cart
              isShown={props.isOpen}
              cart={props.cart}
              numberOfChoose={props.numberOfChoose}
              totalPrice={props.totalPrice}
              handleDelete={props.handleDelete}
            />
          </div>
          <div className="user">
            <img src="../../public/images/image-avatar.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
