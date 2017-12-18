import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Card } from "./";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = {
    score: 0,
    index: 0,
    complete: false
  }

  backToDeck = () => {
    this.props.navigation.goBack();
  }
  restartQuiz = () => {
    this.setState({score: 0, index: 0, complete: false});
  }
  handleAnswer = correct => {

    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
    let {score, index, complete} = this.state;

    score = correct ? score + 1 : score;
    index = index + 1;
    complete = index === questions.length;
    this.setState({score, index, complete});
    if (complete) {
      clearLocalNotification().then(setLocalNotification);
    }
  }

  render() {

    const deckId = this.props.navigation.state.params.deckId;
    const questions = this.props.decks[deckId].questions;
    const {score, index, complete} = this.state;

    if (complete) {
      return (
        <View style={styles.container}>
          <Text style={styles.title} >
            Score: {score} out of {questions.length}
          </Text>
          <TouchableOpacity style={styles.btnContainer} onPress={this.restartQuiz}>
            <Text style={styles.btnTitle}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer} onPress={this.backToDeck}>
            <Text style={styles.btnTitle}>Back To Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>
          Correct Answers: {score} out of {questions.length}
        </Text>
        <Text>
          Questions Remaining: {questions.length - index}
        </Text>
        <Card card={questions[index]} handleAnswer={this.handleAnswer} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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

export default connect(state => state)(Quiz);
