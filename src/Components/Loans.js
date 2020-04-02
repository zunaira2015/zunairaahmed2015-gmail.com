import React, { Component } from "react";
import Login from './Login';
//import createHistory from "history/createBrowserHistory";

class Loans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			};
	}

	render(){
		return(
			localStorage.getItem("Authorized")?
					<div className="LoginBox"><h1 >Loan Page</h1>
					</div>:
					<Login/>
				)
	}
}
export default Loans