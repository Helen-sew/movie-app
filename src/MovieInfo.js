import React, { Component } from 'react';

class MovieInfo extends Component {


    render() { 
        return (  
            <div>
                <h1>Title: {this.props.movie.Title}</h1>
                <h2>Year: {this.props.movie.Year}</h2>
                <img src={this.props.movie.Poster} alt={this.props.movie.Title}/>
                <h3>Genre: {this.props.movie.Genre}</h3>
                <h4>Plot: {this.props.movie.Plot}</h4>
            </div>
        );
    }
}  //the data that came back to us from OMDB set the keys to have a capital letter - we need to make sure we match our data 
 
export default MovieInfo;

/* after completed the MovieInfo component, finally, let's swap out our a tag with this component and 
pass in our movie data as props we'll render nothing if there is 
no data. 
*/