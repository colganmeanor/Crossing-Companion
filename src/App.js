import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Clock from './Components/Clock';
import CurrentCritters from './Components/CurrentCritters';
import Compendium from './Components/Compendium';
import Footer from './Components/Footer';
import apiCalls from './ApiCalls';
import './App.css';
import { dataOrg } from './utilities';
import cloud1 from './images/cloud1.svg'


const App = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [critters, setCritters] = useState({fish: [], seaCreatures: [], bugs: []})
  const [caughtCritters, setCaughtCritters] = useState([])

  const catchCritter = (name) => {
    let prevArray = caughtCritters
    setCaughtCritters([...prevArray, name])
  }

  const removeCritter = (name) => {
    let prevArray = caughtCritters
    let newArray = prevArray.filter((item) => {
      return item !== name
    })
    setCaughtCritters(newArray)
  }

  const handleCritterChange = (name) => {
    caughtCritters.includes(name) ? removeCritter(name) : catchCritter(name)
  }

    useEffect(() => {
           setInterval(() => setCurrentTime(new Date()), 30000);
    }, []);

    useEffect(() => {
        Promise.all([apiCalls.loadFish(), apiCalls.loadSeaCreatures(), apiCalls.loadBugs()])
          .then(data => setCritters({fish: dataOrg(data[0]), seaCreatures: dataOrg(data[1]), bugs: dataOrg(data[2])}))
    }, [])

  return (
    <div className="App">
      <Header />
      <Clock currentTime={currentTime}/>
      <img className='cloud-one' src={cloud1}/>
      <Routes>
        <Route path='/' element={
          <CurrentCritters 
          critters={critters}
          currentTime={currentTime}
          caughtCritters={caughtCritters}
          handleCritterChange={handleCritterChange} 
          />} 
        />
        <Route path='/all-critters' element={
          <Compendium 
          critters={critters}
          caughtCritters={caughtCritters}
          handleCritterChange={handleCritterChange}
          />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
