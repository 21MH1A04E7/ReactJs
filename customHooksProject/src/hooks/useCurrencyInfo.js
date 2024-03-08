import { useEffect,useState } from "react";

//funtional hooks
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    console.log(currency);
    console.log(typeof currency)
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url)
        .then((res)=>{res.json()})
        .then((res)=>setData(res[currency]))
        .catch((err)=>{console.log(err)});
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;