import React from "react";
import { useParams } from "react-router-dom";

function ErrorPage() {
	const params = useParams().word;
	console.log(params);
	return (
		<div id="word">
			<span className="title">{params}</span>
			<br />
			<span className="phonetic">Not found. Please use other word</span>
		</div>
	);
}

export default ErrorPage;
