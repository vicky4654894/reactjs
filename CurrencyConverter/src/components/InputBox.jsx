import React, { useId } from 'react'
function InputBox(
{
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="USD",
  amountDisable=false,
  currencyDisable=false
}
){
  const uniqueId = useId();
  return (
   
    <div className="row rounded">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 htmlFor={uniqueId}>{label}</h4>
              <input 
                type="number" 
                className="form-control rounded" 
                id={uniqueId} 
                placeholder="Enter Currency" 
                disabled={amountDisable} 
                value={amount} 
                onChange={(e) => onAmountChange && onAmountChange(e.target.value)} 
              />
            </div>
            <div>
              <h4>Currency Type</h4>
              <select 
                className="form-select rounded" 
                value={selectCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                disabled={currencyDisable}
              >
                <option value="" disabled>Select Currency</option>
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InputBox