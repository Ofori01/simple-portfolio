import './App.css';
import Header from './components/Header';
import logo from './assets/logo.svg'
import Fetch from './components/Fetch';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
    <Header  logo={logo}/>
    <Fetch url= {''} renderSuccess={Profile} />
      
    </div>
  );
}

export default App;
