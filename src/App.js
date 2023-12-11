import './App.css';
import Header from './components/Header';
import logo from './assets/logo.svg'
import Fetch from './components/Fetch';
import Profile from './components/Profile';
import {Routes, Route} from 'react-router-dom';

function App() {
  const userName = 'Ofori01'
  return (
    <div className="App">
    <Header  logo={logo}/>
    <Routes>
      <Route element={<Fetch url= {`https://api.github.com/users/${userName}`} renderSuccess={Profile} />} path='/' />
      
    </Routes>
      
    </div>
  );
}

export default App;
