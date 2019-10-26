import React from "react";
import "./Card.styles.css";

const Card = ({imageName, handleCardClick}) => {

  const handleClick = event => {
    handleCardClick(event);
  };

  const imagePath = require(`../../Assets/images/${imageName}`);

  return (
    <div className="mx-3 my-2 d-flex justify-content-center">
      <button
        className="card p-0 m-0 imageCard"
        onClick={handleClick}
        style={{background: `url(${imagePath}`}}
        value={imageName}
      >
      </button>

    </div>
  );
};

export default Card;
