import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground ,} from 'react-native';
import {NativeRouter, Switch,Route} from "react-router-native";
import LoginScreen from "./Screens/LoginScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import Header from "./components/Header";
import firebase from "firebase";
import { firebaseConfig } from './config';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Scores from "./Screens/Scores";
firebase.initializeApp(firebaseConfig)



class App extends Component {
  constructor(props) {
        super(props);
    this.state = {
      user: {}
    }
  }



  componentDidMount(){
    // this.checkIfLoggedIn();
  }
  
  // checkIfLoggedIn() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //     if (user) {
  //       this.setState({ user });

  //     } else {
  //       this.setState({ user: null });

  //     }
  //   });

  // }








  render(){
     return(
      <ImageBackground source={require("./assets/logo.png")} style={styles.container} >

        <AppNavigator/>

        {/* <Header/>
     <NativeRouter>
      
        <View style= {styles.screenContainer}>
     
     <Switch>
      <Route exact path = "/" render={()=> this.state.user ? (<DashboardScreen/>) :(<LoginScreen/>)}/>
      <Route exact path = "/LogingScreen" component ={LoginScreen}/>
      <Route exact path = "/Dashboard" component ={DashboardScreen}/>
      <Route exact path = "/Scores" component ={Scores}/>
     </Switch>
     

      </View>
      
     
      </NativeRouter> */}
      </ImageBackground>
     );

  }

  
  
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen,
  Scores:Scores

})

const AppNavigator = createAppContainer(AppSwitchNavigator)


const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    
    height:"100%",
    width:"100%",
    justifyContent:"center"
  },
screenContainer:{
    
    flex:1,
    justifyContent:"center"

    
  }


});


export default App;