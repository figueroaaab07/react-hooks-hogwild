import React from "react";
import { v4 as uuid } from "uuid";
import PigTile from "./PigTile"

function PigTileList({hoggies, tileSelected, onClickHandler, tileHide}) {
  const hoggieDisplay = hoggies.map(hoggie => <PigTile key={uuid()} name={hoggie.name} image={hoggie.image} specialty={hoggie.specialty} weight={hoggie.weight} greased={hoggie.greased} highestMedalAchieved={hoggie["highest medal achieved"]} tileSelected={tileSelected} clickHandler={onClickHandler} tileHide={tileHide} />);
  
  return (
    <div>
      {hoggieDisplay}
    </div>
  );
}

export default PigTileList;
