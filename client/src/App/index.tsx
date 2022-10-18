import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import './style.css';

const App = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default App;
