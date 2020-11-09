import React from "react";
import { StyleSheet, View, Image, Button, FlatList, Text } from "react-native";
import { getImageFromApi} from "../API/TMDBApi";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <View style={styles.main_container}>
        <Image style={styles.image} source={{ uri: getImageFromApi(film.poster_path) }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.mark}>{film.vote_average}</Text>
          </View>
          <Text style={styles.description} numberOfLines={6}>
            {film.overview}
          </Text>
          <Text style={styles.date}>sorti le {film.release_date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#FEEEFE",
    //height: 200,
  },
  image: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#0000FF",
    borderWidth: 1,
    paddingLeft: 5,
  },
  content_container: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  header_container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    flex: 4,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#EEFFEE",
    flexWrap: "wrap",
  },
  mark: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#EEEEFF",
  },
  description: {
    flex: 3,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#FFEEEE",
    fontStyle:"italic"
  },
  date: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#7FFFFF",
  },
});

export default FilmItem;
