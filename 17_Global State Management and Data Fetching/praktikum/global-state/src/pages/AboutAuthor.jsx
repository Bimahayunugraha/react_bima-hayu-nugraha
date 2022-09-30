import { useEffect } from "react";

const AboutAuthor = () => {
	useEffect(() => {
		document.title = "About Author";
	});
	return (
		<div className="pt-4 pb-1">
			<h1 className="h3">About Author</h1>

			<p>This app was develop by someone, a selft-taught web developer and technical writer.</p>
		</div>
	);
};

export default AboutAuthor;
