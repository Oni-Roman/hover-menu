import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [london, setLondon] = useState(false)
  const [paris, setParis] = useState(false)
  const [tokyo, setTokyo] = useState(false)

  function openCity(cityName) {

    switch(cityName) {
      case "London":
        setLondon(true)
        setParis(false)
        setTokyo(false)
        break;
      case "Paris":
        setLondon(false)
        setParis(true)
        setTokyo(false)
        break;
      case "Tokyo":
        setLondon(false)
        setParis(false)
        setTokyo(true)
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="tab">
        <button className="tablinks" onMouseOver={() => openCity('London')}>London</button>
        <button className="tablinks" onMouseOver={() => openCity('Paris')}>Paris</button>
        <button className="tablinks" onMouseOver={() => openCity('Tokyo')}>Tokyo</button>
      </div>

      {london && <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>}


      {paris && <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>}

      {tokyo && <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>}
    </div>
  );
}

export default App;
