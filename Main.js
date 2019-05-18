import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		noteArray: [],
  		noteText: '',
  	}
  }

  render() {

  	let notes = this.state.noteArray.map((val, key) => {
  		return <Note key={key} keyval={key} val={val}
  		        deleteMethod={ () => this.deleteNote(key)}/>
  	});

    return (

      /*Make the textInput move up when keyboard opens or to be used*/
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        {/*UI container*/}
        <View style={styles.container}>

          {/*header*/}
          <View style={styles.header}>
            <Image style={styles.images}
              source={require('../../images/DSC_2471.jpg')}
              />

            <Text style={styles.headerText}>
              - AUGUSTO NOTES -
            </Text>
          </View>

          {/*Scroll the notes*/}
          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder= 'write new note here'
              placeholderTextColor='grey'>
            </TextInput>
          </View>

          {/*Add new note to existing array of notes and bind them*/}
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}> + </Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  /*Add note function*/
  addNote(){
  	if (this.state.noteText){
      var d = new Date ();
      this.state.noteArray.push({
        'date': d.getFullYear() +
        "/" + (d.getMonth() + 1) +
        "/" + (d.getDate()),
        'note': this.state.noteText
      });

      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''});
    }
  }

  /*Delete note function*/
  deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray})
  }
}


{/*Stylesheet with CSS code*/}
const styles = StyleSheet.create({
  container: {
  	flex: 1,
  },
  header: {
    backgroundColor: "#FF8C00",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#959966"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 55
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 20,
    right: 15,
    bottom: 80,
    backgroundColor: "green",
    width: 70,
    height: 70,
    borderRadius: 59,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 50
  },
  images: {
    width: 50,
    height: 50,
    position: "absolute",
    right:5
  }

});
