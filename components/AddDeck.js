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
  const deckTitle = title;
  this.setState({ title: "" });
  this.props.dispatch(addDeck(title));
  this.props.navigation.navigate("Deck", { deckTitle });
  saveDeck(title);
};
  render() {

        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View >
              <Text style={styles.title}>Please add a new deck</Text>
              <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Deck Title"
                    value={this.state.title}
                    onChangeText={title => this.setState({title})}
                />
              </View>
               <TouchableOpacity style={styles.button} onPress={this.saveDeck}>
                <Text style={{ color: "white" }}>Create Deck</Text>
               </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

        );
    //  }
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
  button: {
    marginTop: 40,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5
  }
});

export default connect(state => state)(AddDeck);