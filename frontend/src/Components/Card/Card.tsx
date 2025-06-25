import React from 'react'
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
  <div className="card">
    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YvngAcO0fHO8oqmGAi3oV35SoG3ozvBy_w&s"
        alt="Image"
    />
    <div className="details">
        <h2>{companyName}({ticker})</h2>
        <p>{price}</p>
    </div>
    <p className='info'>This moment the IPL win is right up there with the best moments I've had in my career, but it's still marks five levels under Test cricket.</p>
  </div>
  
  );
}

export default Card;