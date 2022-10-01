import React from "react";
import SpoilerComponent from "./SpoilerComponent";

function DefinitionComponent({ item }) {
	return (
		<div className="Speech">
			<strong>Part of Speech:</strong> <span>{`(${item.partOfSpeech})`}</span>{" "}
			<ul>
				{item.definitions.map((element, index) => {
					return (
						<li key={`def${item}${index}`}>
							{element.definition}
							<span>{element.example ? `(e.g. ${element.example})` : ""}</span>
						</li>
					);
				})}
			</ul>
			<SpoilerComponent desc="Antonyms" list={item.antonyms} />
			<SpoilerComponent desc="Synonyms" list={item.synonyms} />
		</div>
	);
}

export default DefinitionComponent;
