import React from "react"
import { View, Platform, StatusBar } from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import { TabNavigator, StackNavigator } from "react-navigation"
import { purple, white } from "./utils/colors"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { Constants } from "expo"
import {DeckList, Deck, AddDeck, AddCard, Quiz } from "./components"
import { setLocalNotification } from "./utils/helpers"

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: "Deck List",
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "Add Deck",
      tabBarLabel: 'Add DECK',
      tabBarIcon: ({ tintColor }) => (<FontAwesome name='plus-square' size={30} color={tintColor} />
      )
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title:"Deck"
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title:"Add New Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title:"Quiz"
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
