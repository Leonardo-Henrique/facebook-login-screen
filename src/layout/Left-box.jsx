import React from 'react';

import logo from './facebook-logo.svg';

export default () => {
    return (
        <div className="left-box">
           <div className="logo">
               <img src={logo}></img>
           </div>
           <h2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que <br></br>fazem parte da sua vida.</h2>
        </div>  
    )
}