import React from "react";
import "./catogry.styles.scss";

const CatogryItem = (prop) => {
  const { imageUrl, id, catogory } = prop;
  return (
    <div className="catogary-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="catogary-body-container">
        <h3 key={id}>{catogory}</h3>
      </div>
    </div>
  );
};

export default CatogryItem;
