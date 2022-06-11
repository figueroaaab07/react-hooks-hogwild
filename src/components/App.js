import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigsFilterSort from "./PigsFilterSort.js";
import NewPigForm from "./NewPigForm.js";
import PigTileList from "./PigTileList.js";

function App() {
	const [hoggies, setHoggies] = useState([...hogs]);
	const [hoggiesFull, setHoggiesFull] = useState([...hogs]);
	const [tileSelected, setTileSelected] = useState("");
	const [tileHide, setTileHide] = useState([]);
	const [arrangeOptions] = useState(["Show All", "Filter Greased", "Sort by Name", "Sort by Weight"])
	const [activeButton, setActiveButton] = useState("");

	function onAddPig(pigObj) {
    setHoggies([...hoggies, pigObj]);
    hoggiesFull.push(pigObj);
    setHoggiesFull(hoggiesFull);
	}

	function compareValues(key, order = 'asc') {
		return function innerSort(a, b) {
			if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
				return 0;
			}
			const varA = (typeof a[key] === 'string')
				? a[key].toUpperCase() : a[key];
			const varB = (typeof b[key] === 'string')
				? b[key].toUpperCase() : b[key];
			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}
			return (
				(order === 'desc') ? (comparison * -1) : comparison
			);
		};
	}
	
	function onClickTile(event) {
		const tile = (event.target.parentElement.className === "pigTile") ? event.target.parentElement.querySelector("h3").innerText : null;
		(event.target.innerText === "Hide Pig Tile") ? setTileHide([...tileHide, tile]) : setTileSelected(tile);
	}

	function onClickButton(event) {
    const selectedButton = event.target;
    const arrangeAction = selectedButton.innerText;
    setActiveButton(arrangeAction);
    let hoggiesArranged;
		switch(arrangeAction) {
			case 'Show All':
				setTileHide([]);
				hoggiesArranged = hoggiesFull;
				break;
			case 'Filter Greased':
				setTileHide([]);
				hoggiesArranged = hoggiesFull.filter(hoggie => {
					return hoggie.greased === true;
				});
				break;
			case 'Sort by Name':
				setTileHide([]);
				hoggiesArranged = [...hoggiesFull].sort(compareValues('name', 'asc'));        
				break;
			case 'Sort by Weight':
				hoggiesArranged = [...hoggiesFull].sort(compareValues('weight', 'asc'));
				break;
			default:
				break;
		}
    setHoggies(hoggiesArranged);
	}

	return (
		<div className="App">
			<Nav />
			<PigsFilterSort arrangeOptions={arrangeOptions} activeButton={activeButton} onClickHandler={onClickButton} />
      <NewPigForm onPigFormSubmit={onAddPig} />
			<PigTileList hoggies={hoggies} onClickHandler={onClickTile} tileSelected={tileSelected} tileHide={tileHide} />
		</div>
	);
}

export default App;
