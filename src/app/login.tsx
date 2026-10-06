import { Button, StyleSheet, TextInput, View } from "react-native";

const login = () => {



    return(
        <>
        <View>
            <TextInput
            value={"nazwa Uzytkownika"}
            />
            <TextInput
            value={"Hasło"}
            secureTextEntry={true}
            />
            <Button
            title="Zaloguj"
            />
            

        
        </View>
        </>
    )
}

export default login;


const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: 'black',

    }
})