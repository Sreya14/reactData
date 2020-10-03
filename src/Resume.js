import React from 'react';
import data from "./data.json";

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log("profile is"+profile);
	return(
		<div>
			<div className="col-sm-10 col-md-2">
				<div className="card"/>
					
			</div>
		</div>
	);
}


// <Link to={{pathname:"/resume", personcard:{id:index}}} className"btn btn-primary"/>
export default Resume;