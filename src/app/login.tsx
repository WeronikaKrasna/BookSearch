
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookImp from "../../assets/images/Book.png";

const loginScreen = () => {

    //useParams -> hook, ktorym przekazesz nazwe uzytkownik ado innego okna (dokladniej do main ekranu)


    const [text, userName] = useState('');
    const [pass, userPass] = useState('');
    const router = useRouter();

    const logowanie = () => {

        //tutaj bedzie zapytanie do backendu 
        router.replace('/(tabs)');
    }

    const rejestracja = () => {
        router.push('/register')
    }


    return(
        <>
       
        <SafeAreaView style={styles.container}>
             <ImageBackground
            source={BookImp}
            resizeMode="cover"
            style={styles.BackgroundImage}>
            
            <TextInput
           // value={text}
            style={styles.TextPlace}
            onChangeText={userName}
            placeholder="Nazwa Uzytkownika"
            placeholderTextColor="#888"
            
            />
            <TextInput
           // value={pass}
            secureTextEntry={true}
            style={styles.TextPlace}
            placeholder="Haslo"
            placeholderTextColor="#888"
            onChangeText={userPass}
            
            />

            <View style={styles.LoginButton}>
            
           <Button title="Zaloguj"
           onPress={logowanie} />

           <Text>Lub</Text>

           <Button title='Zarejestruj sie'
           onPress={rejestracja}/>

            
            </View>

        </ImageBackground>
        
        </SafeAreaView>
           
        </>
    )
}

export default loginScreen;


const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        flex:1,
    },
    BackgroundImage: {
        width:'100%',
        height:'100%',
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    TextPlace: {
        backgroundColor: 'white',
        borderColor: 'red',
        height: '10%',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        margin: '1%',
    }, 
    LoginButton: {
        marginTop: 40,
        height: '15%',
        width: '90%',
        borderRadius: 10
    }
})