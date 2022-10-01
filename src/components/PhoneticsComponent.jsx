import React from "react";
import AudioComponent from "./AudioComponent";

function PhoneticsComponent({ ph }) {
	if (Array.isArray(ph.audios)) {
		return (
			<span className="phonetics">
				{ph.audios.map((item, index) => {
					return <AudioComponent newAudio={item.audio} key={`ph${index}`} />;
				})}
			</span>
		);
	}
}

export default PhoneticsComponent;
