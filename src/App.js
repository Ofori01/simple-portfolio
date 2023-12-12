import './App.css';
import Header from './components/Header';
import logo from './assets/logo.svg'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Repos from './components/Repos';

function App() {
  const userName = 'Ofori01'
  return (
    <div className="App">
    <Header  logo={logo}/>
    <Routes>
     <Route path='/' element={<Home  userName={userName} />} />
     <Route path='repos' element={<Repos userName={userName} />} />
      
    </Routes>
      
    </div>
  );
}

export default App;
