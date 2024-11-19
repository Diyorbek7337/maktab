import './App.css';
import i18next from 'i18next';
import Navbar from './components/navbar/Navbar';
import Useful from './components/useful/Useful';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {

  const changeLan = (lang) => {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="App">
        <Navbar changeLan={changeLan}/>
        <main> 
          <Outlet />
        </main>
        <Useful/>
        <Footer/>
    </div>
  );
}

export default App;
