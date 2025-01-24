
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import About from '../pages/About';
// import ItemDetails from './pages/ItemDetails';
import NotFound from '../pages/NotFound';
import './App.css'

function App() {


  return (
    <Router>
      <div className="app-container"> 
        <Navbar />
        <div className="content-wrapper"> 
          <Sidebar />
          <main className="main-content"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;