import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";

class Deck extends Component {

  startQuiz = () => {
    this.props.navigation.navigate("Quiz",{
      deckId: this.props.navigation.state.params.deckId});
  };

  addCard = title => {
    this.props.navigation.navigate("AddCard", {
        Title,
        update: () => this.refreshOnGoBack()
      });
  };

  render() {
    const {decks, navigation} = this.props;
    const deck = decks[navigation.state.params.deckId];
    const numberofCards = deck.questions.length;
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text> {numberofCards} cards</Text>
            {numberofCards > 0 ? (
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => this.startQuiz(deck.title)}
              >
                <Text style={styles.btnTitle}>Start Quiz </Text>
              </TouchableOpacity>
            ) : null
            }
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => this.addCard(deck.title)}
              >
                <Text style={styles.btnTitle}>Add Card</Text>
            </TouchableOpacity>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 5,
    marginTop: 15,
    width: 240,
    maxHeight: 40
  },
  btnTitle: {
    fontSize: 20,
    color: "white",
    marginTop: 10
  }
});

export default connect(state => state)(Deck);
