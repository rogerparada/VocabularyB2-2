import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useParams } from "react-router-dom";
import DropdownComponent from "./DropdownComponent";

function ErrorPage() {
	const params = useParams().word;
	console.log(params);
	return (
		<div className="error">
			<DropdownComponent />
			<span className="title capitalize">{params}</span>
			<br />
			<span className="phonetic">Not found. Please use other word</span>
			<p>
				<Link to="/">
					Go to home <FontAwesomeIcon icon={faHome} />
				</Link>
			</p>
		</div>
	);
}

export default ErrorPage;
