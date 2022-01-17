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


const App = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [critters, setCritters] = useState({fish: [], seaCreatures: [], bugs: []})


  const filterData = (data) => {
    setCritters({fish: dataOrg(data[0]), seaCreatures: dataOrg(data[1]), bugs: dataOrg(data[2])})
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
      {/* <img src={'src/Styles/images/cloud1.svg'}/> */}
      <Routes>
        <Route path='/' element={
          <CurrentCritters 
          critters={critters}
          currentTime={currentTime} 
          />} 
        />
        <Route path='/all-critters' element={
          <Compendium 
          critters={critters}
          />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
