import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
	state = {
		movies: getMovies(),
		count: getMovies().length
	};

	handleDelete = movie => {
		deleteMovie(movie._id);
		this.setState({
			count: this.state.movies.length
		});
	};

	handleLike = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	render() {
		if (this.state.count === 0) return <p>There are no movies in the database.</p>;

		return (
			<React.Fragment>
				<p>Showing {this.state.count} movies in the database.</p>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map(movie => (
							<tr key={movie._id}>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<Like
										liked={movie.liked}
										onClick={() => this.handleLike(movie)}
									/>
								</td>
								<td>
									<button
										onClick={() => this.handleDelete(movie)}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default Movies;
