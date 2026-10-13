
import InfoInput from "@/components/InfoInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookImp from "../../assets/images/Book.png";

const loginScreen = () => {

    //useParams -> hook, ktorym przekazesz nazwe uzytkownik ado innego okna (dokladniej do main ekranu)


    const [userName, setuserName] = useState('');
    const [userpass, setuserPass] = useState('');
    const router = useRouter();

    const logowanie = () => {

        //tutaj bedzie zapytanie do backendu 
        router.replace('/(tabs)');
    }

    const rejestracja = () => {
        router.push('/register')
    }

    const SkipLogowania = () => {
        router.replace('/(tabs)/PhotoScreen')
    }


    return(
        <>
       
        <SafeAreaView style={styles.container}>
             <ImageBackground
            source={BookImp}
            resizeMode="cover"
            style={styles.BackgroundImage}>
            
            <InfoInput
            placeholder='Nazwa Uzytkownika'
            onChangeText={setuserName}
            secureTextEntry={false}
            />
            <InfoInput
            placeholder='Haslo'
            onChangeText={setuserPass}
            secureTextEntry={true}
            
            />

            <View style={styles.LoginButton}>
            
           <Button title="Zaloguj"
           onPress={logowanie} />

           <Text>Lub</Text>

           <Button title='Zarejestruj sie'
           onPress={rejestracja}/>


           <Button
           title='Bez Logowania'
           onPress={SkipLogowania}
           />

            
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
    LoginButton: {
        marginTop: 40,
        height: '15%',
        width: '90%',
        borderRadius: 10
    }
})