import React from "react";
import { getWords } from "../services/WordsService";
import ListItemComponent from "./ListItemComponent";
import DropdownComponent from "./DropdownComponent";

export default function ListComponent() {
	const words = getWords();

	return (
		<div className="flex flex-wrap justify-center gap-5">
			<DropdownComponent />
			{words.map((word, index) => {
				return <ListItemComponent word={word} key={index} />;
			})}
		</div>
	);
}
