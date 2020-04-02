import React, { Component } from "react";

import Login from "./Login";
//import createHistory from "history/createBrowserHistory";

class Borrowers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			};
	}

	render(){

		return(
			localStorage.getItem("Authorized")?
					<div className="LoginBox"><h1 >Borrowers Page</h1>
					</div>:
					<Login/>
				)
	}
}
export default Borrowers