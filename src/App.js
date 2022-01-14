import react, {useState, useEffect} from 'react';
import Clock from './Components/Clock';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
           setInterval(() => setCurrentTime(new Date()), 30000);
    }, []);

  return (
    <div className="App">
      <Clock currentTime={currentTime}/>
      <p>This is gonna be the app!</p>
    </div>
  );
}

export default App;
