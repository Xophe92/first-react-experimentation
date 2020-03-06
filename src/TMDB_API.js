import TMDB_API_TOCKEN from "./TMDB_API_TOCKEN"

export default class TMDB_API_WRAPPER{
 
    
    rechercherFilm(text, page){
        
        const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + TMDB_API_TOCKEN + '&language=fr&query=' + text+'&page=' + page
        console.log(url)
        return(
            fetch(url)
                .then(response => response.json())
                .catch(err => err)
        );

    

    }

    static getThumbnailRoot(){

        /*
        poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
        */
        return("https://image.tmdb.org/t/p/w154")
    }
    


}

//  
