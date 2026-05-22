// src/components/Card.jsx
import React, { useState } from "react";
import "../styles/card.css";

export default function Card({ title, copy, link, backgroundImage,linkgit }) {
    const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
          onClick={toggleActive}  
    style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center top",
}}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <div className="view flex items-center justify-around">
          <a className="btn"  target="_blank" href={link}>
          زيارة الموفع
        </a>
          <a className="btn-git" target="_blank" href={linkgit}>
          عرض الكود
        </a>

        </div>
        
      </div>
    </div>
  );
}
