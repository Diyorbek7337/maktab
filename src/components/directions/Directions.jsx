import React, { useState, useEffect } from "react";
import "./directions.css";

function Directions() {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch(`https://admin-panel-production-abfb.up.railway.app/direction`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.reverse());
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="directions container">
      {data &&
        data.map((item, index) => (
          <div className="directions-item-back">
            <div key={index} className="directions-item">
              <div className="directions-img">
                <img src={item.img} alt="img" />
              </div>
              <div className="directions-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Directions;
