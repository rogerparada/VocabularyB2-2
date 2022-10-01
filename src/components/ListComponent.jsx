import React from "react";
import { getWords } from "../services/WordsService";
import ListItemComponent from "./ListItemComponent";

import WordComponent from "./WordComponent";

function ListComponent() {
	return (
		<div className="list">
			<WordComponent newWord={"Vocabulary"} />
			{getWords().map((item, index) => (
				<ListItemComponent word={item} key={index} />
			))}
		</div>
	);
}

export default ListComponent;
