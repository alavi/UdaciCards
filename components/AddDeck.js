import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { addDeck } from "../actions";
import { saveDeck } from "../utils/api";
import { connect } from "react-redux";

class AddDeck extends Component {

  state = { title: ""};

  componentWillUnmount() {
    this.setState({title:""})
  }
saveDeck = () => {
  const {title} = this.state;
  const deckId = title;
  this.setState({ title: "" });
  this.props.dispatch(addDeck(title));
  this.props.navigation.navigate("Deck", { deckId });
  saveDeck(title);
};
  render() {
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding">

              <Text style={styles.title}>What is the title of your new deck?</Text>
              <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Deck Title"
                    onChangeText={title => this.setState({title})}
                    value={this.state.title}
                />
              </View>
               <TouchableOpacity style={styles.button} onPress={this.saveDeck}>
                <Text style={{ color: "white" }}>Submit</Text>
               </TouchableOpacity>

          </KeyboardAvoidingView>

        );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 20
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
  button: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5
  }
});

export default connect(state => state)(AddDeck);
