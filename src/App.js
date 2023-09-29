import { useState } from 'react';
import './App.css';
import CreditCard from './componets/CreditCard';
import Form from './componets/Form';

function App() {
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNum: '',
    month: '',
    year:'',
    cvv:''
  })
  const getData = (cardName,cardNum,month,year,cvv) => {
    // console.log("data", cardName,cardNum,month,year,cvv)
    setCardData({
      cardName,
      cardNum,
      month,
      year,
      cvv
    })
  }
  
  return (
    <div className="App">
      <section className="container">
        <div className='main-flex'>
          <CreditCard 
            cardName = {cardData.cardName}
            cardNumber = {cardData.cardNum}
            cardMonth = {cardData.month}
            cardYear = {cardData.year}
            cardCvv = {cardData.cvv}
            />
          <Form onSubmit={getData}/>
        </div>
      </section>
    </div>
  );
}

export default App;
