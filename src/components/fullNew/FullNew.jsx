import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FullNew.css";
import NewsSidebar from "./NewsSidebar";
import { IoCalendar } from "react-icons/io5";

function FullNew() {
  const { id } = useParams();
  const [news, setNews] = useState(false);
  useEffect(() => {
    fetch(`https://admin-panel-production-abfb.up.railway.app/new/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="full-new-container">
      {news && (
        <div className="full-new">
          <h3 className="fullnew-date">
            <IoCalendar />: <b>{news?.date}</b>
          </h3>
          <div className="full-new-img-container">
            {news?.img.map((item) => (
              <div className="full-new-img border-radius-img">
                <img src={item} alt="img" />
              </div>
            ))}
          </div>
          <h1 className="pt-serif">{news?.title}</h1>
          <p className="pt-serif">{news?.description}</p>
          <p className="pt-serif">Category: {news?.text}</p>
        </div>
      )}
      <NewsSidebar />
    </div>
  );
}

export default FullNew;
