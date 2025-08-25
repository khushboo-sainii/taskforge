import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen w-full">
      <Home />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
