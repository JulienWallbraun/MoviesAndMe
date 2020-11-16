import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

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
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.film.title}</Text>
          {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayFilm()}
      </View>
    )
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.route.params.idFilm).then(data => {
      this.setState({
        film: data
      })
    })
  }
}




export default FilmDetail