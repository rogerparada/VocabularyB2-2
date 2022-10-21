import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHome,
	faList,
	faCircleInfo,
	faSearch,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/DropdownComponent.css";
import DropdownItem from "./DropdownItem";

export default function MenuButton() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="Button flex justify-center menu-container">
				<div
					className="menu-trigger"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<FontAwesomeIcon icon={open ? faCaretDown : faBars} />
				</div>
				<div
					id="dropdown"
					className={`dropdown-menu ${open ? "active" : "inactive"}`}
				>
					<h3 className=" text-base font-bold">Vocabulary for B2.2</h3>
					<DropdownItem icon={faHome} text={"Home"} destination={"/"} />
					<DropdownItem icon={faList} text={"Words"} destination={"/List"} />
					<DropdownItem
						icon={faSearch}
						text={"Search"}
						destination={"/Search"}
					/>
					<DropdownItem
						icon={faCircleInfo}
						text={"About"}
						destination={"/About"}
					/>
				</div>
			</div>
		</>
	);
}
