import React from "react";
import "../assets/css/MeaningsComponent.css";
import DefinitionComponent from "./DefinitionComponent";

function MeaningsComponent({ meanings, items }) {
	if (items === 1 && meanings.length >= 1)
		return <DefinitionComponent item={meanings[0]} />;

	return (
		<div>
			{meanings.map((item, index) => {
				return <DefinitionComponent item={item} key={`meaning${index}`} />;
			})}
		</div>
	);
}

export default MeaningsComponent;
