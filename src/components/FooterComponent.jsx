import React from "react";

function FooterComponent() {
	return (
		<footer>
			<hr />
			<div className="">
				<span>
					Designed by <strong>Roger Parada</strong> - Powered with&nbsp;
					<a
						href="https://dictionaryapi.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="HighLink"
					>
						Free Dictionary API
					</a>
					&nbsp;- 2022
				</span>
			</div>
		</footer>
	);
}

export default FooterComponent;
