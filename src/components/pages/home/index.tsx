import React from "react";
import "./Home.css";
import logo from "./logo.svg";

class HomePage extends React.Component {
	render() {
		return (
			<div>
				HOME
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</div>
		);
	}
}

export default HomePage;
