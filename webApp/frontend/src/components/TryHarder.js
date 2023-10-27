import React from "react";
import { useNavigate } from "react-router-dom";

const TryHarder = () => {

	const navigate = useNavigate();

	setTimeout(() => {
		navigate("/");
	}, 5000)

	return (
		<section>
			<h1>TryHarder</h1>
			<p>You are not authorized</p>
			<p>The code isn't working</p>
		</section>
	);
};

export default TryHarder;
