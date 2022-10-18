import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import './style.css';

const App = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default App;
