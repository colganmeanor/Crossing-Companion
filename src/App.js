import {useState, useEffect} from 'react';
import Header from './Components/Header';
import Clock from './Components/Clock';
import CurrentCritters from './Components/CurrentCritters';
import Footer from './Components/Footer';
import apiCalls from './ApiCalls';
import './App.css';
import { dataOrg } from './utilities';

const App = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [fish, setFish] = useState([])
  const [seaCreatures, setSeaCreatures] = useState([])
  const [bugs, setBugs] = useState([])

  const filterData = (data) => {
    setFish(dataOrg(data[0]))
    setSeaCreatures(dataOrg(data[1]))
    setBugs(dataOrg(data[2]))
  }

    useEffect(() => {
           setInterval(() => setCurrentTime(new Date()), 30000);
    }, []);

    useEffect(() => {
        Promise.all([apiCalls.loadFish(), apiCalls.loadSeaCreatures(), apiCalls.loadBugs()])
          .then(data => filterData(data))
    }, [])

  return (
    <div className="App">
      <Header />
      <Clock currentTime={currentTime}/>
      {fish && <CurrentCritters 
      fish={fish} 
      seaCreatures={seaCreatures} 
      bugs={bugs} 
      currentTime={currentTime} 
      />}
      <Footer />
    </div>
  );
}

export default App;
