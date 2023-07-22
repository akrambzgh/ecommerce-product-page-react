// import "./App.css";
import "./App.css";
import Header from "./components/Header";
import ImageSlide from "./components/ImageSlide";
import InfoText from "./components/InfoText";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="left">
          <ImageSlide />
        </div>
        <div className="right">
          <InfoText />
        </div>
      </main>
      <div className="overlayer"></div>
    </div>
  );
}

export default App;
