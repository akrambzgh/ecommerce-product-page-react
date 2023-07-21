import { useState } from "react";
import Cart from "./Cart";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToglle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="humburgur">
            <img src="../../public/images/icon-menu.svg" alt="" />
          </div>
          <img src="../../public/images/logo.svg" alt="" />
          <ul>
            <img src="../../public/images/icon-close.svg" alt="" />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="serviece">
          <div className="cart-ico" onClick={handleToglle}>
            <img src="../../public/images/icon-cart.svg" alt="" />
            {isOpen && <Cart />}
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
