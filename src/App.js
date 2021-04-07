import React from 'react';
import './App.css';
import avater from './images/avater-crop.jpg';
import chip from './images/chip.jpg';
import mCard from './images/mastercard-logo.png';
import visa from './images/visa.png';
import discover from './images/discover.png';
import payPal from './images/pay_pal.png';


function App() {
  return (
    <div className="container">
      <div className="header-section">
        <ul className="navigation">
          <li className="nav-item">TRIPS</li>
          <li className="nav-item">RECENTLY VIEWED </li>
          <li className="nav-item">BOOKINGS</li>
          <img src={avater} alt="eth" className="avater-icon" />
        </ul>
      </div>
      <hr id="line" />
      <div className="card-section">
        <div id="left-section">
          <p id="pay-info">Payment Information</p>
          <p id="choose-pay">Choose your method of payment.</p>
          <div id="card">
          <p>CARD NUMBER</p>
          <p>4324 5433 9382 1030</p>
          <img src={chip} id="chip" alt="chip"/>
          <p>EXPIRATION DATE</p>
          <p>03/24</p>
          <p>John Doe</p><img src={mCard} id="mc-logo" alt="mastercard"/>
          </div>  
        </div>
        <div id="right-section">
        <ul className="card-logo">
          <li className="logo-item"><img src={visa} className="shared-logo" alt="visa"/></li>
          <li className="logo-item"><img src={discover} className="shared-logo" alt="discover"/></li>
          <li className="logo-item"><div id="round-logo"></div></li>
          <li className="logo-item"><img src={payPal} id="paypal-logo" alt="paypal"/></li>
        </ul>
        <div className="card-columns">
          <div id="column-one">
          <p className="label">Credit card number</p> 
          <input className="details-item" placeholder="4324 5433 9382 1030" type="text"/>
          <p className="label">Security code</p>
          <input className="details-item" placeholder="420" type="text" />
          </div>
          <div id="column-two">
          <p className="label">Expiration date</p>
          <input className="details-item" placeholder="03/24" type="text" />
          <p className="label">Postal code</p>
          <input className="details-item" placeholder="10119" type="text" />
          </div>
        </div>
        <span id="radio-btn"></span><span id="label-two">Use this card for next time purchase</span>
        <input type="submit" id="add-card" value="Add card" />
        </div>
      </div>
      <hr id="line" />
      <div className="total-section">
        <div className="total-left">
        <p>Subtotal</p>
        <p>Estimated TAX</p>
        <p>Promotional Code: <span id="prom-code">Z4KXLM9A</span></p>
        </div>
        <div className="total-right">
        <p>&#8358;2,497.00</p>
        <p>&#8358;119.64</p>
        <p>&#8358;60.00</p>
        </div>
      </div>
      <hr id="line" />
      <div className="payment-section">
      <div className="section-left">
      <button id="pay-button">Complete payment</button>
      </div>
      <div className="section-right">
      <p>TOTAL: &#8358;2556.64</p>
      </div>
      </div>
    </div>
  );
}

export default App;
