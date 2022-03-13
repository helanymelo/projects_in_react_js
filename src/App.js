import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './Coins';
import "./App.css"




function App(){
  const [ coins, setCoins ]=useState([])
  
  useEffect(()=>{
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=EUR")
    .then((res)=>{
      console.log(res.data.coins)
      setCoins(res.data.coins)
    })
  })
 


  return(
    <div className='App'>
      <div className='cryptoHeader '>
        <input placeholder='Search'/>
      </div>
        <div className='cryptoDisplay'>
        {coins.map((item)=>{
          return<div className='btn'>
          <Coins 
            name={item.name} 
            icon={item.icon}
            price={item.price}
            symbol={item.symbol}
          />
            <button>Excluir</button>
          </div>
        })}
        
        </div>
    </div>
  )

}

export default App;


