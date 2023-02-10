import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SongsPage from './pages/SongsPage/SongsPage';
import Header from './components/Header/Header';
import WalletPage from './pages/WalletPage/WalletPage';


function App() {
  return (
    <>
   
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/songs' element={<SongsPage />} />
        <Route path='/wallet' element={<WalletPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
