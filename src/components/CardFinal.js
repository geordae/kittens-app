import React from "react";

const CardFinal = ({ name, email, id }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h5>{name}</h5>
      <h5>{email}</h5>
    </div>
  );
};

export default CardFinal;
