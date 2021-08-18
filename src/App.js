import logo from './logo.svg';
import gettingStarted from './assets/gettingStartedWht.svg'
import uNameIt from './assets/younameit.svg'
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
        <div style={{ marginTop: "50vh" }} ></div>
      <Zoom>
        <h3>Bulk email addresses? Tons of fake names? Random usernames? <br/>
          <img src={uNameIt} className="name-it" alt="logo" />
        </h3>
        <Demo />
      </Zoom>
        <div id="start" />
      <Zoom>
        <div style={{ marginTop: "55vh" }} ></div>
        <img src={gettingStarted} className="App-logo" alt="logo" />
        <Docs />
      </Zoom>
        <Zoom>
      </Zoom>
        <div style={{ marginTop: "50vh" }}></div>
        <div id="beer"></div>
      <Zoom>

        <VenmoMe />
      </Zoom>

    </div>
  );
}

export default App;
