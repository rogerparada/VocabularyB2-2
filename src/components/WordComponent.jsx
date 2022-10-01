import React, { useEffect, useState } from "react";
import { getDefinition } from "../services/WordsService";
import PhoneticsComponent from "./PhoneticsComponent";
import MeaningsComponent from "./MeaningsComponent";

const WordComponent = ({ newWord }) => {
	const [word, setWord] = useState("");
	const [phonetic, setPhonetic] = useState("");
	const [phonetics, setPhonetics] = useState([]);
	const [meanings, setMeanings] = useState([]);

	useEffect(() => {
		getDefinition(newWord).then((w) => {
			setWord(w.word);
			setPhonetic(w.phonetic === "" ? w.phonetics.text : w.phonetic);
			setPhonetics(w.phonetics);
			setMeanings(w.meanings);
		});
	}, [newWord]);

	return (
		<div id="word">
			<div>
				<span className="title">{word}</span>
			</div>
			<div>
				<span className="phonetic">{phonetic}</span>
				<PhoneticsComponent ph={phonetics} />
			</div>
			<MeaningsComponent meanings={meanings} items={1} />
		</div>
	);
};

export default WordComponent;
