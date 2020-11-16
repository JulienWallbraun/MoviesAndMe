import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import {getFilmDetailFromApi, getImageFromApi} from '../API/TMDBApi'

class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          film: undefined
    }
}

    _displayFilm() {
      if (this.state.film != undefined) {
          return (
            <ScrollView>
                <Image style={styles.Image} source={{ uri: getImageFromApi(this.state.film.poster_path) }}/>
               
              <Text style={styles.title}>{this.state.film.title} </Text>
              <Text style={styles.pitch}>{this.state.film.overview} </Text>
              <Text style={styles.date}>{this.state.film.release_date} </Text>
              <Text style={styles.mark}>{this.state.vote_average} </Text>
              <Text style={styles.votes}>{this.state.film.vote_count} </Text>
              <Text style={styles.budget}>{this.state.film.budget} </Text>
              <Text style={styles.type}>{this.state.film.genres.map(function(genre){
                  return genre.name
              }).join(" / ")} 
              </Text>
              <Text style={styles.brand}>{this.state.film.production_companies.map(function(production_companies){
                  return production_companies.name
              }).join(" / ")} 
              </Text>
              {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
            </ScrollView>
          )
      }
    }
    
  render() {
    return (
      <View style={styles.main_container}>
        {//<Text>{this.props.route.params.idFilm}</Text>
        }
        {this._displayFilm()
        }
      </View>
    )
  }

  
componentDidMount(){
    console.log("Component FilmDetail monté")
    getFilmDetailFromApi(this.props.route.params.idFilm).then(data=>
        this.setState({
            film: data
        })
    )
        
        //console.log("te"+data))
        //console.log("après l'appel API le state vaut "+this.state)
        console.log("après le mount")
    console.log(this.state)
  }

  
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "row"
  },
  Image: {
      flex: 4,
  },
  title:{
      flex : 3
  },
  pitch :{
      flex : 6
  },
  date :{
    flex : 1
},
mark :{
    flex : 1
},
votes :{
    flex : 1
},
budget :{
    flex : 1
},
type :{
    flex : 1
},
brand :{
    flex : 1
},
});

export default FilmDetail