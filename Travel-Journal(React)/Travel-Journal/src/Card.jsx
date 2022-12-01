import React from "react";

export default function Card(item){
    return(
        <div className="card-container">
            <img src={item.img} />
            <div className="card-info">
                <div className="card-map-info">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{item.location}</p>
                    <a href={item.mapLink}>view on Google Maps</a>
                </div>
                <h3>{item.destination}</h3>
                <div className="card-dates">
                    <p>{item.date.from} - {item.date.to}</p>
                </div>
                <p className="card-description">
                    {item.description}
                </p>
            </div>
        </div>
    )
}