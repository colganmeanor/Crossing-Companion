import react, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
           setInterval(() => setCurrentTime(new Date()), 30000);
    }, []);

  return (
    <div className="App">
      <p>This is gonna be the app!</p>
    </div>
  );
}

export default App;
