const API_TOKEN = "59e1f81aca9d28320dc8bce758b6e472";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    console.log("url : "+url)
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
  }

  export function getImageFromApi(text){
    return 'https://image.tmdb.org/t/p/w300'+text
  }

  export function getFilmDetailFromApi(id){
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=' + API_TOKEN + '&language=fr'
    console.log("url de get film detail: "+url)
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
  }