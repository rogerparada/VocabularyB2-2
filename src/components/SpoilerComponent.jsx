import React from "react";
import { Link } from "react-router-dom";

function SpoilerComponent({ desc, list }) {
	//console.log(list);
	let regex = /[.=*+?^${}()\s|[0-9]/g;

	if (list && list?.length > 0) {
		return (
			<details className="spoiler">
				<summary>{desc}</summary>

				<ul>
					{list.map((item, index) => (
						<li key={`${desc}${index}`}>
							{item.match(regex) === null ? (
								<Link to={`/definition/${item}`}>{item}</Link>
							) : (
								<span className="no-link">{item}</span>
							)}
						</li>
					))}
				</ul>
			</details>
		);
	}
}

export default SpoilerComponent;
