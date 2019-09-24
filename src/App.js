import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
	handleLike = movie => {
		console.log("Liked");
	};

	render() {
		return (
			<main className="container">
				<Movies />
			</main>
		);
	}
}

export default App;
