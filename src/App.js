import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SongsPage from './pages/SongsPage/SongsPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/songs' element={<SongsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
