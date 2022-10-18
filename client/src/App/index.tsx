import { Outlet } from 'react-router-dom';
import './style.css';

const App = () => (
  <div>
    <h1>Nav bar</h1>
    <Outlet />
    <h2>Footer</h2>
  </div>
);

export default App;
