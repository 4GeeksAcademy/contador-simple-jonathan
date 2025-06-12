import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ contador }) => {
	const digitos = String(contador).padStart(6, "0").split("");

	return (
		<div className="crono">
			<div className="digito">⌚</div>
			{digitos.map((digito, index) => (
				<div className="digito" key={index}>{digito}</div>
			))}
		</div>
	);
};




export default Home;