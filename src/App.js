import "./App.css";
import { Cards } from "./components/Cards";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
        <Home />
        <Cards />
        <Footer />
    </div>
  );
}

export default App;
