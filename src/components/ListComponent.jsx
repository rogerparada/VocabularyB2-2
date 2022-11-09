import React from "react";
import { getUnitWords } from "../services/WordsService";
import ListItemComponent from "./ListItemComponent";
import DropdownComponent from "./DropdownComponent";

export default function ListComponent() {
	const unit1 = getUnitWords(1);
	const unit3 = getUnitWords(3);

	return (
		<div className="mx-3 mb-10">
			<DropdownComponent />
			<div className="flex flex-row mt-5">
				<h1 className=" font-bold">Unit 1 & 2</h1>
			</div>
			<hr className="mb-5" />
			<div className="flex flex-wrap justify-center gap-5">
				{unit1.map((word, index) => {
					return <ListItemComponent word={word.word} key={index} />;
				})}
			</div>
			<div className="flex flex-row mt-5">
				<h1 className=" font-bold">Unit 3</h1>
			</div>
			<hr className="mb-5" />
			<div className="flex flex-wrap justify-around gap-5">
				{unit3.map((word, index) => {
					return <ListItemComponent word={word.word} key={index} />;
				})}
			</div>
		</div>
	);
}
