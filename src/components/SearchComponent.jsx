import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import WordSearchComponent from "./WordSearchComponent";
import DropdownComponent from "./DropdownComponent";

export default function SearchComponent() {
	const [word, setWord] = useState("");

	return (
		<div className="main">
			<DropdownComponent />
			<FontAwesomeIcon icon={faSearch} />
			<span className="ml-3">Search:</span>
			<input
				type="text"
				name=""
				id=""
				className="border-2 border-gray-400 ml-3 rounded-md h-12"
				placeholder="Please type a word."
				onChange={(e) => {
					setWord(e.target.value);
				}}
			/>
			<div className={`${word ? "" : "hidden"}`}>
				<WordSearchComponent search={word} />
			</div>
		</div>
	);
}
