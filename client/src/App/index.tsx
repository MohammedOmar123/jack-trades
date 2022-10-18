import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import './style.css';

const App = () => (
  <div>
    <Navbar />
    <Outlet />
    <h2>Footer</h2>
  </div>
);

export default App;
