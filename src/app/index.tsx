
import { Alert, Button, StyleSheet, Text, View } from "react-native";


const app = () => {

  const Funkcja = () => {
    Alert.alert("kliknieto")
  }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>

      <Button 
      title="Kliknij mnie"
      onPress={Funkcja}
      
      />

      
    </View>

  )
}

export default app;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 24,
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    color: 'red',
    textAlign: 'center',
    borderRadius: 6,
    fontSize: 16,
    padding: 20,
    fontWeight: 'bold',
  }
})