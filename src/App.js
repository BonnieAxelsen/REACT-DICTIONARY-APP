import "./styles/App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Dictionary defaultKeyword="home" />
        <Footer />
      </div>
    </div>
  );
}
