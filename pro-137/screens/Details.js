import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class App extends React.Component {

  render(){
  return (
    <View style={styles.container}>
     <Text style = {styles.header}>Star Details</Text>
     <Image  
     source={{uri:"https://cdn.mos.cms.futurecdn.net/uxdsce4CMFwqPDRKEKvbX4.jpeg"}}
style = {{width:"100%",height:"35%"}}
     />
     <Text>
     Star App
     </Text>
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff899',
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
header: {
  fontWeight: "bold",
  textAlign:"center",
  fontSize:30,
  backgroundColor:"#fff899"

}
});
