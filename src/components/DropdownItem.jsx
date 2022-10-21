import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function DropdownItem({ text, icon, destination }) {
	return (
		<li className="dropdown-item text-base md:text-lg flex justify-start align-middle">
			<FontAwesomeIcon icon={icon} />
			<Link to={destination} className=" hover:font-bold">
				{text}
			</Link>
		</li>
	);
}
