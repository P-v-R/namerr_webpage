import logo from './logo.svg';
import './App.css';
import { Example } from './components/navbar/Example';
import Zoom from 'react-reveal/Zoom';

import "./components/navbar/styles.css";
import Intro from './components/text/Intro';
import { Demo } from './components/cards/Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Example />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        
          <Intro/>
          <div style={{marginTop:"15%"}}></div>
          <Zoom>
          <h3>Bulk email addresses? tons of fake names? Random usernames? <u>You Name It!</u></h3>
          <Demo/>
          </Zoom>
        
      </header>
    </div>
  );
}

export default App;
