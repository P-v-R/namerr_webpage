import {useState} from "react";
// import { Button } from "reactstrap";
import { motion } from "framer-motion";
import "./cardstyles.css"
import {Namerr} from "namerr"

export const Demo = () => {
  const[data, setData] = useState("Try it out!")


  function populateUsers(){
    let users = Namerr.users(10)
    let userStrings = Object.values(users).map(i => (
      `{ fullName: '${i.fullName}',
         email: '${i.email}', 
         username: '${i.username}',
        password: '${i.password.slice(0,8)}' } `) 
    )
    setData(`[${userStrings}]`);
  }
  return (
    <div className="demoDiv">
      <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}} 
          className="btn databtn btn-lg" 
          style={{border:"3px solid #f79226"}}
          onClick={() => setData(`'${Namerr.names(80).join("', '")}'`)}
          >names
      </motion.button>{' '}
      <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}} 
          className="btn databtn btn-lg" 
          style={{border:"3px solid #c54536"}}
          onClick={() => setData(`'${Namerr.emails(50).join("', '")}'`)}
          >emails
      </motion.button>{' '}
      <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}} 
          className="btn databtn btn-lg" 
          style={{border:"3px solid #3e415c"}}
          onClick={() => setData(populateUsers)}
          >users
      </motion.button>{' '}
      
      <div className="demoData">
        <h5 className="dataText container">{data}</h5>
      </div>


    </div>
  )};