import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function register() {

    const router = useRouter();

    const [name, username] = useState('');
    const [pass, userpass] = useState('');
    const [repeatpass, userRepeatPass] = useState('');
    

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const rejestracja = () => {
        router.replace('/login')
    }

    return(
        <>

        <SafeAreaView>
            <TextInput
            placeholder="Nazwa Uzytkownika"
            onChangeText={username}
            />

            
            <TextInput
            placeholder="Wiek"
            onChangeText={username}
            keyboardType="numeric"
            />


           <View>
            <TextInput
            id={'passInput'}
            placeholder="Haslo"
            onChangeText={userpass}
            secureTextEntry={!showPassword}/>

            <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            /> 
            </View>

        
           <View>
            <TextInput
            placeholder="Haslo"
            onChangeText={userpass}
            secureTextEntry={!showRepeatPassword}/>

            <MaterialCommunityIcons
            name={showRepeatPassword ? 'eye-off' : 'eye'}
            /> 
            </View>

            <Button
            title={'Zarejestruj sie'}
            onPress={rejestracja}/>  


        </SafeAreaView>

        </>
    )
}