import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SongsPage from './pages/SongsPage/SongsPage';
import Header from './components/Header/Header';
import SongPage from './pages/SongPage/SongPage';
import Footer from './components/Footer/Footer';
import BtcResrouces from './pages/BtcResources/BtcResources';


function App() {
  return (
    <>
   

    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/songs' element={<SongsPage />} />
        <Route path="/songs/:songId" element={<SongPage />} />
        <Route path='/resources' element={<BtcResrouces />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
