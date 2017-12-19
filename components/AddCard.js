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
    const deckId = this.props.navigation.state.params.title;
    const {question, answer} = this.state;
    this.props.dispatch(addCard(deckId, {question, answer}));
    this.props.navigation.goBack();
    addCardToDeck(deckId, {question, answer});

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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginTop: 40,
    fontSize: 30
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
