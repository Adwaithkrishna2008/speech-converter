import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm


export default class App extends React.Component {
  constructor(){
    super()
    this.state={name:''}
  }
  speak = () =>{
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  }
  render(){
  return (

    <View style={styles.container}>
<Header
backgroundColor={'#6c4790'}
centerComponent={{
            text: 'SPEECH CONVERTER',
            style: { color: '#fff', fontSize: 20 },
          }}/>
          <Image style={styles.imageIcon}
          source={{
            uri:'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225'
          }}
          />

      <Text style={styles.text2}>
ENTER THE WORD.
        </Text>
      <TextInput style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({name:text})
      }}
      value={this.state.text}
      />
      <View>
      
      <TouchableOpacity style={styles.button}
      onPress={this.speak}>
<Text style={styles.text3}>
CLICK HERE TO SPEAK
</Text>
      
      </TouchableOpacity>

      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox:{
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon:{
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  button:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
