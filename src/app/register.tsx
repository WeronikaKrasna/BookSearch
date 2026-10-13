import InfoInput from "@/components/InfoInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function register() {

    const router = useRouter();


    const [username, setusername] = useState('');
    const [userpass, setuserpass] = useState('');
    const [repeatpass, setRepeatPass] = useState('');
    const [userage, setuserage] = useState(0);
    

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const rejestracja = () => {

        if(Number(userage) >= 120){
            Alert.alert('Podano zly wiek')
        } else
              router.replace('/login')
    }

    return(
        <>

        <SafeAreaView style={styles.container}>
            <InfoInput
             placeholder='Nazwa Uzytkownika'
             onChangeText={setusername}
            secureTextEntry={false}
            keyboardType="default"
            />

            
            <InfoInput
             placeholder='Wiek'
             onChangeText={(text) =>setuserage(Number(text))}
            secureTextEntry={false}
            keyboardType="numeric"
            />


           <View style={styles.passInput}>
            <TextInput
            id={'passInput'}
            placeholder="Haslo"
            onChangeText={setuserpass}
            secureTextEntry={!showPassword}/>

            <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            style={{marginRight: '5%'}}
            /> 
            </View>

        
           <View style={styles.passInput}>
            <TextInput
            placeholder="Powtorz haslo"
            onChangeText={setRepeatPass}
            secureTextEntry={!showRepeatPassword}/>

            <MaterialCommunityIcons
            name={showRepeatPassword ? 'eye-off' : 'eye'}
            style={{marginRight: '5%'}}
            /> 
            </View>

            <Button
            title={'Zarejestruj sie'}
            onPress={rejestracja}/>  


        </SafeAreaView>

        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4169E1',
        alignItems: 'center'
    },
    passInput: {
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: 10,
        width: '90%',
        height: '10%',
        alignItems: 'center',
        margin: '2%'
    },
    inputs: {
        backgroundColor: 'white',
        width: '90%',
        height: '10%',
        margin: '2%',
        borderRadius: 10
    }
    
})