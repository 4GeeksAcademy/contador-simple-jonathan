import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ contador }) => {
	return (

		<div className="digitos row align-items-start">
			<div className="col-md-2"><h1>{contador}</h1></div>
			<div className="col-md-2"><h1>{contador}</h1></div>
			<div className="col-md-2"><h1>{contador}</h1></div>
			<div className="col-md-2"><h1>{contador}</h1></div>
			<div className="col-md-2"><h1>{contador}</h1></div>
			<div className="col-md-2"><h1>{contador}</h1></div>
		</div>



	);
};




export default Home;