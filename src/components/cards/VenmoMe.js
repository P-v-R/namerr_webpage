import "./cardstyles.css";
import qr from "../../assets/venQR.png" 



export const VenmoMe = () => {
  return (
  <div>
    <h3 className="support-text">Like what you see? Saved you some time?<br></br> <u>🍻  buy me a beer 🍻</u></h3>
    <img src={qr} class="img-fluid" alt="Responsive image"/>
  </div>)

};