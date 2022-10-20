import React from "react";
import { Link } from "react-router-dom";

function ListItemComponent({ word }) {
	return (
		<div>
			<Link
				className="capitalize text-xl md:text-3xl font-thin"
				to={`/definition/${word}`}
			>
				{word}
			</Link>
		</div>
	);
}

export default ListItemComponent;
