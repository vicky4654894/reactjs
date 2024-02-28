import React, { useState } from 'react'
import  {InputBox} from './components';
import useCurrency from './hooks/useCurrency';
import './App.css';
function App(){

  const[amount,setAmount] = useState(0);
  const[from,setFrom] = useState("USD");
  const[to,setTo] = useState("INR");
  const[convertedAmount,setConvertAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setTo(from);
    setFrom(to);
    setConvertAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    console.log(currencyInfo[to]*amount);
    setConvertAmount(currencyInfo[to]*amount);
  }

  return (
    <div className='container'>
      <h1>Currency Exchange</h1>
      <div>
      <InputBox
      label="From"
      amount={amount}
      selectCurrency={from}
      currencyOptions={options}
      onAmountChange={(amount)=>setAmount(amount)}
      onCurrencyChange={(curr)=>setFrom(curr)}
     
      />
      </div>
      <div>
      <button type="button" className="btn btn-primary m-2" onClick={swap}>Swap</button>
      </div>
      <div>
      <InputBox
       label="To"
       amount={convertedAmount}
       selectCurrency={to}
       currencyOptions={options}
       onAmountChange={(curr)=>setConvertAmount(amount)}
       onCurrencyChange={(curr)=>setTo(curr)}
       
      />
      </div>
      <div>
      <button type="button" onClick={convert} className="btn btn-success text-center mt-3">Convert to {from} to {to}</button>
      </div>
  </div>
  )
}
export default App;