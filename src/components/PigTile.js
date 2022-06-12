import React from "react";

function PigTile({name, specialty, greased, weight, highestMedalAchieved, image, tileSelected, clickHandler, tileHide}) {
  return (
    <div className="pigTile" style={{display: tileHide.includes(name) ? 'none' : 'block'}} onClick={clickHandler}>
      <h3 className="smallHeader">{name}</h3>
      <img className="minPigTile" src={image} alt={name} />
      {(tileSelected === name) && (
        <>
          <div>Specialty: {specialty}</div>
          <div>Greased: {(greased) ? "Yes" : "No"}</div>
          <div>Weight: {weight} pounds</div>
          <div className="achievementText">Highest Medal Achieved: {highestMedalAchieved}</div>
        </>
      )}
      <br></br>
      <button className="hideButton">Hide Pig Tile</button>
  </div>
  );
}

export default PigTile;