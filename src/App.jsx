import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import InfoText from "./components/InfoText";
import Buy from "./components/Buy";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="left">
          <Image />
        </div>
        <div className="right">
          <InfoText />
          <Buy />
        </div>
      </main>
      <div className="overlayer"></div>
    </div>
  );
}

export default App;
