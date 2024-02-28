import { useEffect, useState } from "react";
  
function useCurrency(currency){
    currency='USD';
    let url = `https://v6.exchangerate-api.com/v6/92efd3510a998d03789e9049/latest/${currency}`;
    const[data,setData] = useState({});
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((res)=>{
            console.log("Data");
            setData(res.conversion_rates);
        })
    },[currency])
    console.log(data)
    return data;
}

export default useCurrency;