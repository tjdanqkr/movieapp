import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Movie extends Component{
    static proptype={
        title : PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }
    render(){
        
        return(
            <div className="Movie">
                <div className="MoviePoster">
                    <MoviePoster poster={this.props.poster} alt={this.props.alt}></MoviePoster>
                </div>
                <div className="Movie_Columns">
                <h1>{this.props.title}</h1>
                <div className="Movie_Genres">
                    {this.props.genres.map((genre,index) => <Movie_Genres genres={genre} key={index}></Movie_Genres>)}
                </div>
                <div className="Movie_Synopsis">
                <h3>{this.props.synopsis}</h3>
                </div>
                </div>
            </div>
        )
    }
}
function Movie_Synopsis({synopsis}){
    return(
        <p className="Movie_Synopsis">{synopsis}</p>
    )
}
function Movie_Genres({genres}){
    return(
        <span className="Movie_Genre">{genres} </span>
    )
}
class MoviePoster extends Component{
    static propTypes ={
        alt : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"></img>
        );
    }
}

Movie.propTypes ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default Movie;