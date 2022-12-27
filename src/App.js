import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={ Home } />
      <Footer />
    </div>
  );
}

export default App;
