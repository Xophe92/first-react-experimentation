import React from 'react';
import Film from './FilmItem'
import  './FilmList.css'
import TMDB_API_WRAPPER from '../TMDB_API'

import InfiniteScroll from 'react-infinite-scroller';


export default class FilmList extends React.Component{
    
    loadMore(){
        this.TMDB_API.rechercherFilm("Espion", this.state.currentPage)
            .then((data) => this.setState({currentPage : this.state.currentPage+1, films : [...this.state.films, ...data.results]}))
        }

    constructor(props){
        super(props)

        this.TMDB_API = new TMDB_API_WRAPPER();

        
        this.state = {
            currentPage: 1,
            films : []
        }

    }
    

     

    render(){
        
        const loader = <div className="loader">Loading ...</div>;
        console.log(this.state)
        return(


            <InfiniteScroll
            pageStart={1}
            loadMore={this.loadMore.bind(this)}
            hasMore={true || false}
            loader={loader}
            className="d-flex flex-wrap" >   
                 {this.state.films.map(
                    (item, key) => <Film film={item} key={key} />
                )}
            </InfiniteScroll>


        )
    }

    componentDidMount(){
       // this.loadMore()

    }
}



