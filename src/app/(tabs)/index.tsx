import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookImg from "../../../assets/images/Book.png";


const app = () => {
  

  
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
       source={BookImg}
       resizeMode="cover"
       style={styles.BackgroundImage}>

        <View style={styles.Box}>
          <Text></Text>
        </View>
 
    

      </ImageBackground>
    </SafeAreaView>

  )
}

export default app;


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
      BackgroundImage: {
        width:'100%',
        height:'100%',
        flex:1,
        resizeMode: 'cover',
    //    justifyContent: 'flex-end',
        alignItems: 'center',

    },
    Box: {
       width: '90%',
       height: '20%',
       backgroundColor: 'white',
       opacity:0.5, 
       marginTop: '5%',
    }
})