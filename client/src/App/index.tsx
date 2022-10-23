import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import Statistics from '../components/Statistics/Statistics';
import './style.css';

const App = () => (
  <div>
    <Navbar />
    <Outlet />
    <Statistics />
    <Footer />
  </div>
);

export default App;
