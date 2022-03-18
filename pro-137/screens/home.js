import * as React from 'react';
import { Text, View, StyleSheet , FlatList, TouchableOpacity} from 'react-native';


export default class App extends React.Component {

  renderItem=({item})=>{
    return(
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("Details")}
      style = {styles.button}
      >
    <Text style = {styles.paragraph}>{item.name}</Text>
    </TouchableOpacity>
    )
  }


  render(){
    const Data = [{name:"Fareesa"},{ name:"Souvik"}, {name:"Arnav"},{name:"Fareesa"},{ name:"Souvik"}, {name:"Arnav"}]
  return (
    <View style={styles.container}>
     <Text
     style = {styles.header}
     >Star</Text>
     <FlatList
     data={Data}
     renderItem={this.renderItem}
     />
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white"
  },
  button: {
    padding: 7,
    backgroundColor:"#190C50",
    alignItems:"center",
    borderBottomWidth:1,
    borderBottomColor:"#ff9899",


  },
header: {
  fontWeight: "bold",
  textAlign:"center",
  fontSize:30,
  backgroundColor:"#ff9899"

}
});
