import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import Loans from "./Loans";
import Borrowers from "./Borrowers";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {

		return (
			<BrowserRouter basename="/idp/">
				<div>
					<Route exact path="/" component={Login} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/Loans" component={Loans}/>
					<Route exact path="/Borrowers" component={Borrowers}/>	
					</div>
			</BrowserRouter>
		)}}
export default App;