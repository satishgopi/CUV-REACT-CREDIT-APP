import React from 'react'
import './CreditCard.css'
import line from './Assets/line2.png'

function CreditCard(props) {

  return (
    <>
    <div className='card-flex'>
    <div className='card-front'>
            <div className='card-logo'>
                <div className='circle-fill'></div>
                <div className='circle-outline'></div>
            </div>
            <div className='w-100'>
                <div className='credit-card-number' >
                    {
                        props.cardNumber ? 
                        <div>
                            <span>{props.cardNumber[0]}</span>
                            <span>{props.cardNumber[1]}</span>
                            <span>{props.cardNumber[2]}</span>
                            <span>{props.cardNumber[3]}</span>
                            <br />
                            <span>{props.cardNumber[4]}</span>
                            <span>{props.cardNumber[5]}</span>
                            <span>{props.cardNumber[6]}</span>
                            <span>{props.cardNumber[7]}</span>
                            <br />
                            <span>{props.cardNumber[8]}</span>
                            <span>{props.cardNumber[9]}</span>
                            <span>{props.cardNumber[10]}</span>
                            <span>{props.cardNumber[11]}</span>
                            <br />
                            <span>{props.cardNumber[12]}</span>
                            <span>{props.cardNumber[13]}</span>
                            <span>{props.cardNumber[14]}</span>
                            <span>{props.cardNumber[15]}</span>
                        </div>
                        :
                        <div>
                            <span>0</span>
                            <span>0 </span>
                            <span>0</span>
                            <span>0</span>
                            <br />
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <br />
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <br />
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                            <span>0</span>
                        </div>
                        
                    }
                    
                </div>
                <div className='btm-name'>
                    {props.cardName ? <p>{props.cardName}</p> : <p>JANE APPLESEED</p>}
                    {props.cardMonth  ? <p>{props.cardMonth} / {props.cardYear}</p> : <p>00/00</p>}
                </div>
            </div>
        </div>

        <div className='card-back'>
            <div className='black-box'></div>
            <div className='btm-box'>
                <div className='gray-box'>
                    {props.cardCvv ? <p>{props.cardCvv}</p> : <p>000</p>}
                </div>
                <div>
                    <img src={line}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreditCard