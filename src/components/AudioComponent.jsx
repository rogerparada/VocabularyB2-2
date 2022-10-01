import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/AudioComponent.css";

function AudioComponent({ newAudio }) {
	const [text, setText] = useState("");

	function playAudio(pAudio) {
		console.log(pAudio);
		let audio = new Audio(pAudio);
		audio.play();
	}

	useEffect(() => {
		let r = newAudio
			.split("/")
			.slice(-1)
			.toString()
			.replace(".", "-")
			.split("-");
		setText(r[1]);
	}, [newAudio]);

	return (
		<button onClick={() => playAudio(newAudio)} className="AudioButton">
			<span>{text}</span>
			<FontAwesomeIcon icon={faVolumeHigh} />
		</button>
	);
}

export default AudioComponent;
