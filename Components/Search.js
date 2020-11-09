import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  ActivityIndicator
} from "react-native";
import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: false,
    }
    this.searchedText = ""
    this.currentPage = 0
    this.totalPages = 0
  }

  _loadFilms() {
    console.log("load films")
    if (this.searchedText.length > 0) {
      
      this.setState({ isLoading: true });
        getFilmsFromApiWithSearchedText(this.searchedText, this.currentPage+1).then((data) => {
          console.log("Avant incréementation : page courante = "+this.currentPage+", total pages = "+this.totalPages)
          this.currentPage = data.page
          this.totalPages = data.total_pages
          console.log("Après incréementation : page courante = "+this.currentPage+", total pages = "+this.totalPages)
          this.setState({
            films: this.state.films.concat(data.results),
         //films: data.results,
            isLoading: false,
        });
      });
    }
  }

  _searchTextInputChange(text) {
    this.searchedText = text;
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _searchFilms(){
    this.currentPage = 0
    this.totalPages = 0
    this.setState({
      films: []
      },
      () => this._loadFilms())
  }

  render() {
    console.log(this.state.isLoading);
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Titre du film"
          onChangeText={(text) => this._searchTextInputChange(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title="Rechercher" onPress={() => this._searchFilms()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log("onendreacged")
            if (this.currentPage < this.totalPages){
              this._loadFilms()
            }
          }}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Search;
