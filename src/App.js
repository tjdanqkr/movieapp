import React,{Component} from 'react';
import './App.css';
import Movie from './Movie';






class App extends Component {
  //render: componentWillMount()-> render()-> componentDidMount()
  //Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render()->component
  componentWillMount(){}
  
  state= {}
  componentDidMount(){
    this._getMovies();
  }
  _callApi=()=>{
    return fetch('https://yts.lt/api/v2/list_movies.jsonhttps://yts.lt/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json=> json.data.movies)
    
    .catch(err=> console.log(err))
  }
  _getMovies =  async () => { 
    const movies = await this._callApi()
    this.setState({
      movies 
    })
  }
  _renderMovies = () =>{
    
    const movies = this.state.movies.map((movie)=>{
      console.log(movie)
      return <Movie title={movie.title} alt={movie.title} poster={movie.medium_cover_image} genres={movie.genres} synopsis={movie.synopsis}></Movie>
    })
    return movies; 
  }
  render() {
    
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies():'Loading'}
      </div>
    );
  }
}


export default App;
