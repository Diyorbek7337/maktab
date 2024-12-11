import React, { useEffect, useState } from "react";
import { IoCalendar } from "react-icons/io5";

function NewsSidebar() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://3-maktab-back-production.up.railway.app/new")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="news-sidebar">
      <h3>So'ngi yangiliklar</h3>
      {info &&
        info.map((item) => (
          <div key={item.id} className="news-sidebar-item">
            <div className="news-sidebar-img">
              <img src={item.img[0]} alt="img" />
            </div>
            <h4 className="pt-serif">{item.title}</h4>
          </div>
        ))}
    </div>
  );
}

export default NewsSidebar;
