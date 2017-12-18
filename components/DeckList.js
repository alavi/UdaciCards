import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import { connect } from "react-redux";
//import tolower from "lodash.tolower";

class DeckList extends Component {

  async componentDidMount() {
    const { dispatch } = this.props;
    const data = await getDecks();
    dispatch(receiveDecks(JSON.parse(data)));
  }

  handlePress = title => {
    const deckId = title;
    this.props.navigation.navigate("Deck", {deckId});
  };

  render() {

    if (this.props.decks === null) {
        return (
          <View  style={styles.container}>
            <Text>There is no deck. </Text>
            <Text>Please Click on "New Deck" to add new decks.</Text>
          </View>
        );
    }
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Decks</Text>
       <FlatList
        data={Object.values(this.props.decks)}
        renderItem={({ item: {questions, title} }) => {
          return (
            <TouchableOpacity
              style={styles.deckListItemContainer}
              onPress={() => this.handlePress(title)}
            >
              <Text style={styles.btnTitle}>{title}</Text>
              <Text style={styles.btnText}>
               {questions.length} {questions.length === 1
                ? "Card " : "Cards "} in this Deck
              </Text>
            </TouchableOpacity>
          );
        }
      }
      keyExtractor={item => item.title}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  deckListItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    marginTop: 15,
    width: 240,
    height: 70
  },
  btnTitle: {
    fontSize: 25,
    color: "white"
  },
  btnText: {
    color: "white"
  }
});


export default connect(state => state)(DeckList);
