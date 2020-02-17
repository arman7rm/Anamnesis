import React, { Component } from 'react';
import firebase from "firebase";
import { Image, Text, Button, View, StyleSheet,ImageBackground, TouchableHighlight} from "react-native";
import {Link} from "react-router-native";
// let scoreSong = new Audio("./scoreSong.mp3");

class Scores extends Component {
    // Setting our component's initial state
    state = {
        scores: [],
        username: "",
        score: "",
        isPlaying: false
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        // this.musicToggle();
        this.loadScores();

    }

    // Loads all books  and sets them to this.state.books
    loadScores = async () => {
        const response = await fetch('https://avengers-memory-game.firebaseio.com/users.json?orderBy="Score"&limitToLast=10&print=pretty'


        );

        const resData = await response.json();

        const Scoreinfo = [];
        for (const key in resData) {
            Scoreinfo.push(resData[key]);
            // Scoreinfo.push(key, resData[key].Score,resData[key].first_name, resData[key].last_name);
        }
        this.setState({scores:Scoreinfo})
        console.log(resData[key])
    }


    // Deletes a book from the database with a given id, then reloads books from the db
    deleteScore = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.score) {
            API.saveScore({
                username: this.state.username,
                score: this.state.score
            })
                .then(res => this.scores())
                .catch(err => console.log(err));
        }
    };

    // musicToggle = () => {
    //     let isPlaying = this.state.isPlaying;


    //     if (isPlaying === true) {
    //         scoreSong.pause();
    //         isPlaying = false;
    //     }
    //     else {
    //         scoreSong.play();
    //         isPlaying = true;
    //     }

    //     this.setState({ isPlaying })
    // };




    render() {

        console.log(this.state.scores)

        return (
            <View style= {styles.scoreWrapper}>
           
                    <View style={styles.highContainer}>
                        <Image style={styles.high} source={require("./Images/highScores.gif")} />
                    </View>

                    <View style={styles.buttonLink}>
                    <TouchableHighlight  onPress={()=>this.props.navigation.navigate('DashboardScreen')} >

                    <Text style={styles.hyplink} >Return to Game</Text>
                    </TouchableHighlight>
                    
                     <Button title="SIGN OUT" onPress={() => firebase.auth().signOut()}  />
                    
                    </View>

                  
                
                <View>
                <ImageBackground source={require("./Images/spider.jpg")} style={styles.spider} >

                    <View style={styles.scroll}>



                        {this.state.scores.map(score => {
                            return (


                                <View style={styles.topScores} key={score.gmail}>

                                    <Text style={styles.gameTitle}> {score.first_name}  {score.last_name} {score.Score} </Text>


                                </View>


                            );
                        })}



                    </View>
                    </ImageBackground>
                </View>
              
                   
            </View>
        );
    }
}




const styles = StyleSheet.create({



high:{
    height:"100%",
    width : "100%",
 
    },

    highContainer:{

        width:'100%',
       
        height:"15%",
      alignItems:"center",
      paddingTop: "5%",

        
    },

gameTitle:{
    fontSize:20,
    color:"red"
},
scoreWrapper:{
    flex:2
   
},
hyplink:{
    fontSize:20,
    color:"blue",
    textDecorationLine: "underline"
},

buttonLink:{
    flexDirection:"row",
    justifyContent:"space-between"
},
scroll:{
    alignItems:"center"
},
spider:{  height:"100%",
width:"100%",

}




})

export default Scores;