import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <div>
          <Navbar />
          <MyPortfolio />
          <ToastContainer />
      </div>
  );
}

export default App;
