import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { addCardToDeck } from "../utils/api";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  saveNewCard = () => {
    const deckTitle = this.props.navigation.state.params.title;
  //  const deckTitle = this.props.navigation.state.params.deckTitle;
    const {question, answer} = this.state;
    this.props.dispatch(addCard(deckTitle, {question, answer}));
    this.props.navigation.goBack();
    addCardToDeck(deckTitle, {question, answer});

  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={styles.title}>Add a question and an answer below:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Question"
            onChangeText={question => this.setState({question})}
            value={this.state.question}
            autoFocus={true}
            autoCapitalize="none"
            autoGrow={true}
            multiLine={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Answer"
            onChangeText={answer => this.setState({answer})}
            value={this.state.answer}
            autoFocus={true}
            autoCapitalize="none"
            autoGrow={true}
            multiLine={true}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.saveNewCard}>
          <Text style={{color:"white"}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    height: 40,
    margin: 30,
    flexDirection: "row"
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    flex: 1
  },
  btn: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5
  }
});

export default connect()(AddCard);
