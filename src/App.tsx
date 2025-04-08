import './App.css';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  const location = useLocation();

  return (
    <div className={`${location.pathname !== '/login' ? 'bg-white dark:bg-bgDark-all' : ''}  text-black dark:text-white pl-[5%] w-full h-screen overflow-y-auto `}>
      {location.pathname !== '/login' && <Navbar />}
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;