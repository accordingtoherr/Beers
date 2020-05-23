import React, {useEffect, useState} from 'react';
import './App.css';

const Beer = ({title,city,type,web}) => {

return(
<div className="beerlife">
    <h1>{title}</h1>
    <h2>{city}</h2>
    <p>{type}</p>
   <a href="">{web}</a>
   
</div>
);

}

export default Beer;