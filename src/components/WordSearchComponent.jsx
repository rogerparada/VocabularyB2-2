import React, { useEffect, useState } from "react";
import { getDefinition } from "../services/WordsService";
import "../assets/css/WordComponent.css";
import PhoneticsComponent from "./PhoneticsComponent";
import MeaningsComponent from "./MeaningsComponent";
import { useParams } from "react-router-dom";
import DropdownComponent from "./DropdownComponent";

const WordSearchComponent = ({ search }) => {
	let newWord = useParams().word;
	const [word, setWord] = useState("");
	const [phonetic, setPhonetic] = useState("");
	const [phonetics, setPhonetics] = useState([]);
	const [meanings, setMeanings] = useState([]);
	const [status, setStatus] = useState("");

	useEffect(() => {
		getDefinition(newWord)
			.then((w) => {
				setWord(w.word);
				setPhonetic(w.phonetic === "" ? w.phonetics.text : w.phonetic);
				setPhonetics(w.phonetics);
				setMeanings(w.meanings);
				setStatus("OK");
			})
			.catch(() => {
				setStatus("Fail");
			});
	}, [newWord]);

	useEffect(() => {
		if (search) {
			setWord(search);
			getDefinition(search)
				.then((w) => {
					setPhonetic(w.phonetic === "" ? w.phonetics.text : w.phonetic);
					setPhonetics(w.phonetics);
					setMeanings(w.meanings);
					setStatus("OK");
				})
				.catch(() => {
					setStatus("Fail");
				});
		}
	}, [search]);

	if (status === "Fail") {
		return (
			<div className="mt-3 text-center">
				<hr />
				Word <strong>{word}</strong> not found
			</div>
		);
	}

	return (
		<div className="mt-3">
			<DropdownComponent />
			<hr />
			<div className="m-3">
				<div>
					<span className="title">{word}</span>
				</div>
				<div className="flex flex-row mb-3">
					<span className="phonetic my-auto ">{phonetic}</span>
					<PhoneticsComponent ph={phonetics} />
				</div>
				<MeaningsComponent meanings={meanings} />
			</div>
		</div>
	);
};

export default WordSearchComponent;
