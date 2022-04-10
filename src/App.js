import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js'
import About from './components/About.js'
import RotatingPeople from './components/RotatingPeople';
import StoreSuccess from './components/StoreSuccess';
import ContactForm from './components/ContactForm';
import BottomPage from './components/BottomPage';

function App() {
  return (
    <div>
    <div className = "app">
      <NavBar />
      <About />
      <div className = "addMoreFadedWhite"></div>
    </div>
    <RotatingPeople />
    <StoreSuccess />
    <ContactForm />
    <BottomPage />
    </div>
  );
}

export default App;
