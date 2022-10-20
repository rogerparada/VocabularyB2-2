import React from "react";
import { getLastWords } from "../services/WordsService";
import ListItemComponent from "./ListItemComponent";

import WordComponent from "./WordComponent";

function ListComponent() {
	const items = 10;
	const words = getLastWords(items);
	return (
		<div className="list">
			<WordComponent newWord={"Vocabulary"} />
			<p className="mt-10 mx-3 font-bold">Last {items} words: </p>
			<div className="flex flex-wrap gap-3 mx-3 mb-10 md:mb-3">
				{words.map((item, index) => (
					<ListItemComponent word={item} key={index} />
				))}
			</div>
		</div>
	);
}

export default ListComponent;
