import React from 'react';

function Coins ({name, icon, price, symbol}){
    return(
        <div className='coin'>
          <h3>Name:{name}</h3>
          <img src={icon} alt=""/>
          <h3>Price: {price}</h3>
          <h3>Symbol:{symbol}</h3>
        </div>
    )
}
export default Coins;

