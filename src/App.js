import logo from './logo.svg';
import './App.css';
import { Example } from './components/navbar/Example';
import Zoom from 'react-reveal/Zoom';

import "./components/navbar/styles.css";
import Intro from './components/text/Intro';
import { Demo } from './components/cards/Demo';
import { Docs } from './components/cards/Docs';
import { VenmoMe } from './components/cards/VenmoMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Example />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <Intro />
        </header>
        <div id="try"></div>
        <div style={{ marginTop: "60vh" }} ></div>
        <Zoom>
          <h3>Bulk email addresses? Tons of fake names? Random usernames? <br></br> <u>You Name It!</u></h3>
          <Demo />
        </Zoom>
        <div id="start"></div>
        <div style={{ marginTop: "65vh" }} ></div>
          <Docs />
        <Zoom>
        </Zoom>
        <div style={{ marginTop: "65vh" }}></div>
        <div id="beer"></div>
        <Zoom>
        
          <VenmoMe />
        </Zoom>
      
    </div>
  );
}

export default App;
