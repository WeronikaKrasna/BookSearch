import { StyleSheet, Text, View } from "react-native"


export default function PhotoScreen() {



    return(
        <>
        <View style={styles.container}> 
            <Text> Miejsce na wybranie photo lub zrobienie go</Text>
        </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white'
    }
})