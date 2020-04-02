import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	handleClick() {
		const history = createHistory();
		history.push("/home");
		history.go("/home");
	}
	responseGoogle(response) {
		console.log(response);
		if(response.status=="unknown"){
			
			console.log("Hello")
		}
		else{
						localStorage.setItem("Authorized","Authorized");
			const history = createHistory();
			history.push("/home");
			history.go("/home");
	
		}
	  }
	responseFacebook(response) {
		console.log(response);
		if(response.status=="unknown"){
			
			console.log("Hello")
		}
		else{
						localStorage.setItem("Authorized","Authorized");
			const history = createHistory();
			history.push("/home");
			history.go("/home");
	
		}
	  }
	    componentDidMount(){
	 	   localStorage.removeItem("Authorized")
	    }

	render(){
		return(
			<div className="OuterContainer">
					<div className="joinInput">
							<FacebookLogin
							  className="loginbuttons"
								appId="3183976978292594"
 						   autoLoad={true}
    						fields="name,email,picture"
     						callback={this.responseFacebook}
	 						/>
							 <br/>
							
							  <GoogleLogin
							  className="loginbuttons"
    					    clientId="32151153617-2euje5vsmnu1rhrecj1h0fntdgc9fdvg.apps.googleusercontent.com"
       						 buttonText="LOGIN WITH GOOGLE"
        					onSuccess={this.responseGoogle}
        					/>
							
							</div> 
					</div>
		)
	}
}
export default Login