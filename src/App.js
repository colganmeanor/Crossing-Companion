import react, {useState, useEffect} from 'react';
import Clock from './Components/Clock';
import apiCalls from './ApiCalls';
import logo from './logo.svg';
import './App.css';
import { dataOrg } from './utilities';

const App = () => {

  


  const [currentTime, setCurrentTime] = useState(new Date());
  const [fish, setFish] = useState({fish: {}})
  const [seaCreatures, setSeaCreatures] = useState({seaCreatures: {}})
  const [bugs, setBugs] = useState({bugs: {}})

  const filterData = (data) => {
    setFish(dataOrg(data[0]))
    setSeaCreatures(dataOrg(data[1]))
    setBugs(dataOrg(data[2]))
  }


    useEffect(() => {
           setInterval(() => setCurrentTime(new Date()), 3000);
    }, []);

    // useEffect(() => {
    //       apiCalls.loadFish()
    //       .then((data) => setFish({fish: data}))
    //       // .then(console.log(critter))
    // }, []);

    useEffect(() => {
        Promise.all([apiCalls.loadFish(), apiCalls.loadSeaCreatures(), apiCalls.loadBugs()])
          .then(data => filterData(data))
    }, [])

  return (
    <div className="App">
      <Clock currentTime={currentTime}/>
      <p>This is gonna be the app!</p>
    </div>
  );
}

export default App;

// .then(data => setFish({fish: data[0]}))
//           .then(data => setSeaCreatures(data[1]))
//           .then(data => setBugs(data[2]))
