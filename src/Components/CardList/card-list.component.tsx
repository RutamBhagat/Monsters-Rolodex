import React from "react";
import Card from "../Card/card.component";
import { Monster } from "../../App";


type CardListProps = {
  monsters: Monster[],
  input: string,
}

const CardList = ({ monsters, input }: CardListProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-center w-3/4 mx-auto">
      {/* in case of empty input this will not filter anything and show all monsters */}
      {monsters
        .filter((monster) => {
          return monster.name.toLowerCase().includes(input.toLowerCase());
        })
        .map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
    </div>
  );
};

export default CardList;
