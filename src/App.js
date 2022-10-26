import logo from './logo.svg';
import './App.css';
import Clock from './components/clock';
import ClockHook from './components/hooks/clockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockHook></ClockHook>     
      </header>
    </div>
  );
}

export default App;
