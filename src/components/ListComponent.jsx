import React from "react";
import { getWords } from "../services/WordsService";
import ListItemComponent from "./ListItemComponent";

export default function ListComponent() {
	const words = getWords();

	return (
		<div className="flex flex-wrap justify-center gap-5">
			{words.map((word, index) => {
				return <ListItemComponent word={word} key={index} />;
			})}
		</div>
	);
}
