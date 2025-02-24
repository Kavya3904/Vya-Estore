import React from "react";
import "./catogry.styles.scss";
import { useNavigate } from "react-router-dom";

const CatogryItem = (prop) => {
  const { imageUrl, id, catogory , route} = prop;

  const navigate = useNavigate()

  const onNavigateHandler = ()=>navigate(route)
  return (
    <div className="catogary-container" onClick={onNavigateHandler}>
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
