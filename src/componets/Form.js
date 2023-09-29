import React, { useState } from 'react'
import './Form.css';

const Form = () => {

    const [cardName, setCardName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");


    const [error, setError] = useState(false);

    // const [error2, setError2] = useState(false);

    function condition(){
        if(cardName.length === 0 || 
            cardNum.length === 0 || 
            month.length === 0 || 
            year.length === 0 || 
            cvv.length === 0
            )
        {
            setError(true)
        }
    }

   const handleSubmit = (e) => {
    
        e.preventDefault()
        condition();
        const obj = {
            cardN:cardName,
            cardNum:cardNum,
            month:month,
            year:year,
            cvv:cvv
        }
        console.log(obj.cardN)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>CARDHOLDER NAME</label>
                <br/>
                <input 
                    type="text"
                    value={cardName}
                    placeholder='e.g. Jane Appleseed'
                    onChange = {(e) => {
                        setCardName(e.target.value)
                    }}
                />
                {error && cardName.length <= 0 ? <p>Cardholder name required</p> : ""}
                
            </div>
            <div>
                <label>CARD NUMBER</label>
                <br/>
                <input 
                    type="number"
                    value={cardNum}
                    placeholder='e.g. 1234 5678 9123 0000'
                    onChange = {(e) => {
                        setCardNum(e.target.value.slice(0,16))
                    }}
                />
                {error && cardNum.length <= 0 ?  <p>Card number required</p> : "" }
               
            </div>
            <div className='d-flex'>
                <div className='flex1'>
                    <label>EXP.DATE (MM/YY)</label>
                    <br/>
                    <div className='d-flex'>
                        <div>
                        <input 
                            type="number"
                            value={month}
                            maxLength={2}
                            placeholder='MM'
                            onChange={(e) => {
                                setMonth(e.target.value.slice(0,2))
                            }}
                        />
                        {error && month.length <= 0 ?  <p>Month required</p> : "" }
                        </div>
                        <div>
                        <input 
                            type="number"
                            value={year}
                            maxLength={4}
                            placeholder='YY'
                            onChange={(e) => {
                                setYear(e.target.value.slice(0,4))
                            }}
                        />
                        {error && year.length <= 0 ?  <p>Year required</p> : "" }
                        </div>
                    </div>
                </div>
                <div className='flex1'>
                    <label>CVC</label>
                    <br/>
                    <input 
                        type="type"
                        value={cvv}
                        maxLength={3}
                        placeholder='e.g 123'
                        onChange={(e) => {
                            setCvv(e.target.value.slice(0,3))
                        }}
                    />
                    {error && cvv.length <= 0 ?  <p>CVC must be numeric</p> : "" }
                </div>
            </div>
            {/* <p>{obj.cardN}</p> */}
            <button>Confirm</button>
        </form>
    </>
  )
}

export default Form