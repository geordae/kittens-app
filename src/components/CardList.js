import React from "react";
import CardFinal from "./CardFinal";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <CardFinal
          key={monster.id}
          name={monster.name}
          email={monster.email}
          id={monster.id}
        />
      ))}
    </div>
  );
};

export default CardList;
