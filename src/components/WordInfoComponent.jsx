import React, { useEffect, useState } from "react";
import { getDefinition } from "../services/WordsService";
import "../assets/css/WordComponent.css";
import PhoneticsComponent from "./PhoneticsComponent";
import MeaningsComponent from "./MeaningsComponent";
import { Navigate, useParams } from "react-router-dom";
import DropdownComponent from "./DropdownComponent";

const WordInfoComponent = () => {
	const newWord = useParams().word;
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

	if (status === "Fail") {
		return <Navigate to={`/error/${newWord}`} />;
	}

	return (
		<div id="word">
			<DropdownComponent />
			<div>
				<span className="title">{word}</span>
			</div>
			<div className="flex flex-row mb-3">
				<span className="phonetic my-auto ">{phonetic}</span>
				<PhoneticsComponent ph={phonetics} />
			</div>
			<MeaningsComponent meanings={meanings} />
		</div>
	);
};

export default WordInfoComponent;
