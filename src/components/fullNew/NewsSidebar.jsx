import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendar } from "react-icons/io5";

function NewsSidebar() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://admin-panel-production-abfb.up.railway.app/new")
      .then((res) => res.json())
      .then((data) => setInfo(data.reverse()))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div className="news-sidebar">
      <h3>So'ngi yangiliklar</h3>
      {info &&
        info.map((item, index) => (
          <Link
            key={index}
            to={`/fullnew/${item._id}`}
            className="news-sidebar-item"
          >
            <div className="news-sidebar-img border-radius-img">
              <img src={item.img[0]} alt="img" />
            </div>

            <div>
              <h4 className="pt-serif">{item.title}</h4>
              <span className="fullnew-date">
                <IoCalendar />:{item.date}
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default NewsSidebar;
