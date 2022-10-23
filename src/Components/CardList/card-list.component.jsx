import React from "react";
import Card from "../Card/card.component";

const CardList = ({ monsters, input }) => {
  // in case of empty input this will not filter anything and show all monsters
  let list = monsters
    .filter((monster) =>
      monster.name.toLowerCase().includes(input.toLowerCase())
    )
    .map((monster) => {
      return <Card monster={monster} />;
    });
  return (
    <div className="flex flex-row flex-wrap justify-center w-3/4 mx-auto">
      {list}
    </div>
  );
};

export default CardList;
