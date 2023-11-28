import './App.css';
import Header from './components/Header';
import logo from './assets/logo.svg'
import Fetch from './components/Fetch';
import Profile from './components/Profile';

function App() {
  const userName = 'Ofori01'
  return (
    <div className="App">
    <Header  logo={logo}/>
    <Fetch url= {`https://api.github.com/users/${userName}`} renderSuccess={Profile} />
      
    </div>
  );
}

export default App;
