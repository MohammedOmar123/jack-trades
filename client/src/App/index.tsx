import Button from '@mui/material/Button';
import './style.css';
import Navbar from '../components/NavBar/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Button variant="contained">Hello World</Button>
  </div>
);

export default App;
