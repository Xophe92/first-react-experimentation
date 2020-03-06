import React from 'react';
import TMDB_API_WRAPPER from "../TMDB_API"
import "./FilmItem.css"
import Truncate from 'react-truncate';



export default class Film extends React.Component{ 

    stars(note){
        return(
            note == 0 ? "0.00" : <div>{parseFloat(note)/2}</div>
        )
    }

    extractYear(release_date){
        try{
            return release_date.substring(0,4) 
        }
        catch{
            return ("-")
        }
    }

    filmPoster(film){
        return(film.poster_path == null ? 
        <div className="missingPoster"> </div> : 
        
        <img className="poster" src={TMDB_API_WRAPPER.getThumbnailRoot()+film.poster_path} alt="poster" />)
    }

    render(){
        return(
            <a href="http://google.com">
            <div className="film">
                <div className="d-flex flex-column ">
                    <div >{this.filmPoster(this.props.film)}</div>
                    <div className="title"><Truncate width={150}>{this.props.film.title}</Truncate></div>
                </div>
                <div className="d-flex flex-row justify-content-between footer">
                    <div className="date">{this.extractYear(this.props.film.release_date)}</div>
                    <div>
                        {this.stars(this.props.film.vote_average)}
                    </div>
                </div>
            </div>
            </a>
        )
    }

}