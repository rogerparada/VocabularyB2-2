import React from "react";

export default function AboutComponent() {
	return (
		<div className="main">
			<div>
				<p>
					This web is for educational purposes and is an easy way to keep me
					learning English. To build this web I've used:
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-10">
				<div className="">
					<a
						href="https://reactjs.org/"
						target="blank"
						className="font-bold text-3xl"
					>
						React
					</a>
				</div>
				<div className="">
					<a
						href="https://dictionaryapi.dev/"
						target="blank"
						className="font-bold text-3xl"
					>
						Free Dictionary API
					</a>
				</div>
				<div className="">
					<a
						href="https://github.com"
						target="blank"
						className="font-bold text-3xl"
					>
						GitHub
					</a>
				</div>
				<div className="">
					<a
						href="https://render.com"
						target="blank"
						className="font-bold text-3xl"
					>
						Render
					</a>
				</div>
			</div>
		</div>
	);
}
