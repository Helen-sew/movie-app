import React, { Component } from 'react';
import MovieInfo from './MovieInfo'


class OMDBQueryForm extends Component {
   constructor(props) {
       super(props);
       this.state = {
           baseURL: 'https://www.omdbapi.com/?',  //the start of our request beginning with http://, after the last / we have a question mark, that will start our query parameters
           apikey: 'apikey=' + 'c96b9abf',   //apikey is the specific key OMDB is looking for, then we'll add our own api key (no spaces).
           query: '&t=', //the ampersand & lets us know that there is another query parameter coming up. t= is the next key, it matches the type of search we want to do. 
           movieTitle: '',  //the movie title we'd like to search for. We'll be able to enter what we want using our input and form 
           searchURL: '', //here we'll end up concatenating all the piece to make a working url. 

       }

   }

   handleChange = (event) => {
       this.setState({[event.target.id]: event.target.value})

   }

   handleSubmit = (event) => {
       event.preventDefault()
       this.setState({
           searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
       },  async () => {
           //fetch request will go here , as callback (use arrow function) //use async await and try catch  
             try{
                    const response = await fetch(this.state.searchURL); //fetch the data from preset state searchURL
                    const result = await response.json();//expect the result in json format 
                    this.setState({movie: result}); //movie is a new property key... will use it in MovieInfo with this.props.movie....
             }catch (err) {
                 console.log(err)
             }
       })
   }

    render() { 
        return (  
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input id="movieTitle" type="text" value={this.state.movieTitle} onChange={this.handleChange} />
                    <input type="submit" value='Find Movie Info'/>
                </form>
                {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ''} 
            </React.Fragment>
        );   //when you click on the anchor tag, you shoud be taken to the jSON view: ....
    }
}
 
export default OMDBQueryForm ;

/*
Using Fetch (Fetch is a function that comes with 2 arguments, first one is the path of the data and second is an object)
Rather than render the anchor tag, we want to be able to display the data we want on our webpage. 
Let's start out by getting our JSON from OMDB to console log. When we are doing a get request, all 
we need to do is put a string as our first argument. 
We have to make sure that state has been set, before we make our request. So we'll add our fetch request as a second
argument in our setState function inside our handleSubmit.
*/ 

/* 
Rendering our response in the Browser 
Let's make a movie component that will render a view of our movie 
*/