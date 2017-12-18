import React, { Component } from "react";
import {StyleSheet, Text, View,TouchableOpacity,  } from "react-native";

class Card extends Component {
  state = {
    showAnswer: false
  };

  flipCard = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  render() {
    if (this.state.showAnswer) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Answer:</Text>
          <Text style={styles.text}>{this.props.card.answer}</Text>
          <TouchableOpacity
            style={[styles.btnContainer, { backgroundColor: "green" }]}
            onPress={() => {
              this.flipCard();
              this.props.handleAnswer(true);
            }}
          >
            <Text style={styles.btnTitle}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnContainer, { backgroundColor: "red" }]}
            onPress={() => {
              this.flipCard();
              this.props.handleAnswer(false);
            }}
          >
            <Text style={styles.btnTitle}>Incorrect</Text>

          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Question:</Text>
        <Text style={styles.text}>{this.props.card.question}</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={this.flipCard}>
          <Text style={styles.btnTitle}>Show Answer</Text>
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
  text: {
    fontSize: 15,
    margin: 15
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
export default Card;
