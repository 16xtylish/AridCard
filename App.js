import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.jpeg'; 
import uaar from './assets/uaar.png';

export default function App() {
  return (

    <View style={styles.container}>
          <Image source={uaar} style={styles.uaar} />

  <Text style={{color: 'black',fontSize: 20, alignItems: 'center', justifyContent: 'center'}} >  PMAS ARID AGRICULTURE UNIVERSITY</Text>
  <Text style={{color: 'black',fontSize: 20, alignItems: 'center', justifyContent: 'center'}} >      RAWALPINDI      </Text>
      <Text>



</Text>
      <Image source={logo} style={styles.logo} />
<Text>



</Text>
      <Text style={styles.instruction} >        Ayesha Sajjad      </Text>
      <Text style={styles.instructions} >       19-Arid-1231      </Text>
<Text style={styles.instructions} >   BS(Software Engineering)</Text>
      <Text style={styles.instructions} >      UIIT      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 370,
    height: 400,
    justifyContent: 'center',
    borderRadius: 40
  },
  uaar: {
    width: 100,
    height: 100,
  },
  instructions: {
    color: '#888',
    fontSize: 28,
    alignItems:'center'

  },
  instruction: {
    color: 'black',
    fontSize: 30,
    justifyContent: 'center'
  }, 
});