import react, {useState} from "react";
// import { Button } from "reactstrap";
import "./cardstyles.css"
import {Namerr} from "namerr"

export const Demo = () => {
  const[data, setData] = useState(Namerr.names(30).join(", "))

  // ["#f79226", "#c54536", "#3e415c"]
  
  return (
    <div className="demoDiv">
      <button className="btn databtn btn-lg" style={{border:"3px solid #f79226"}}>names</button>{' '}
      <button className="btn databtn btn-lg" style={{border:"3px solid #c54536"}}>emails</button>{' '}
      <button className="btn databtn btn-lg" style={{border:"3px solid #3e415c"}}>users</button>{' '}
      
      <div className="demoData">
        <h5 className="dataText">{data}</h5>
      </div>


    </div>
  )};