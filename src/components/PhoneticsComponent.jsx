import React from "react";
import AudioComponent from "./AudioComponent";

function PhoneticsComponent({ ph }) {
	if (Array.isArray(ph.audios)) {
		return (
			<div className="phonetics flex flex-row justify-center">
				{ph.audios.map((item, index) => {
					return <AudioComponent newAudio={item.audio} key={`ph${index}`} />;
				})}
			</div>
		);
	}
}

export default PhoneticsComponent;
