import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageSlide from "./components/ImageSlide";
import InfoText from "./components/InfoText";

function App() {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [isOpen, setIsOpen] = useState(false);
  const [length, setLength] = useState(
    JSON.parse(sessionStorage.getItem("length"))
  );
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("length", JSON.stringify(length));
  }, [count, cart, length]);

  function handleToglle() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }
  function increment() {
    setCount(JSON.parse(localStorage.getItem("count")) + 1);
    setIsOpen(false);
  }
  function decrement() {
    if (JSON.parse(localStorage.getItem("count")) > 0) {
      setCount(JSON.parse(localStorage.getItem("count")) - 1);
    } else {
      setCount(JSON.parse(localStorage.getItem("count")));
    }
    setIsOpen(false);
  }
  function handleBuy() {
    if (JSON.parse(localStorage.getItem("count")) > 0) {
      setCart(true);
    }
  }
  function handleDelete() {
    setIsOpen(false);
    setCart(false);
    setCount(0);
  }
  let totalPrice = 125 * count;
  function toLeft() {
    if (JSON.parse(sessionStorage.getItem("length")) < 0) {
      setLength(JSON.parse(sessionStorage.getItem("length")) + 100);
    }
  }
  function toRight() {
    if (JSON.parse(sessionStorage.getItem("length")) > -300) {
      setLength(JSON.parse(sessionStorage.getItem("length")) - 100);
    }
  }
  function showList() {
    setIsShown(true);
  }
  function hideList() {
    setIsShown(false);
  }
  return (
    <div className="App">
      <Header
        showList={showList}
        isShown={isShown}
        hideList={hideList}
        handleToglle={handleToglle}
        isOpen={isOpen}
        cart={cart}
        numberOfChoose={count}
        totalPrice={`$${totalPrice}`}
        handleDelete={handleDelete}
      />
      <main className="main">
        <div className="left">
          <ImageSlide length={length} toLeft={toLeft} toRight={toRight} />
        </div>
        <div className="right">
          <InfoText
            decrement={decrement}
            countNum={count}
            increment={increment}
            handleBuy={handleBuy}
          />
        </div>
      </main>
      <div className={isShown ? "overlayer show" : "overlayer"}></div>
    </div>
  );
}

export default App;
