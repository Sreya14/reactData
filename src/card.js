import React from 'react';
import data from './data.json'
import logo from './logo.svg'
import logo1 from './logo.svg'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
function Card(){
	let cardData = data.details;
	console.log(cardData);
	let images = [logo,logo1];

	return(
		<div>
			
				<h1 className="text-primary">Card</h1>
				
				<div className="row">
				{cardData.map((values,index)=>(
					<div className="col-sm-10 col-md-4" key={index}>
						<div className="card">
							<img src={images[index]}/>
							<h1>
								{values.card.name}
							</h1>
							<h1>
								<a href={"mailto:"+values.card.email}>{values.card.email}</a>
							</h1>
							<h1>{values.card.mobile}</h1>
							<Link to={{ pathname:"/resume",personcard:{id:index}}} className="btn btn-primary">Click me</Link>
						</div>
					</div>
				
				))}
				</div>
			
			
		</div>
		);
}

export default Card;