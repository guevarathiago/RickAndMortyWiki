import React from "react";
import './Cards.css'

const Cards = (props) => {
  return (
    <div className="container">
      {Array.isArray(props.results) &&
        props.results.map((item) => (
          <div className="card" key={item.id}>
            
            <div className="status-specie">
              <h3>{item.name}</h3>
              <h5>{item.status}</h5>
              <h5>{item.species}</h5>
              <span className="location">Last Location</span>
              <h5 className="location2">{item.location.name}</h5>
            </div>
            <img src={item.image} alt={item.name} />
          </div>
          
        ))}
    </div>
  );
};

export default Cards;
