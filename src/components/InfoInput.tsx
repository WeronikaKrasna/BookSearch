import { KeyboardType, StyleSheet, TextInput } from "react-native";


    type Props = {
        placeholder?:string;
        value?:String;
        onChangeText?: (text: string) => void;
        secureTextEntry: boolean;
        keyboardType?: KeyboardType;
    };


export default function InfoInput(Props: Props)
{
    return(
        <>
            <TextInput
                style={styles.TextPlace}
                onChangeText={Props.onChangeText}
                placeholder={Props.placeholder}
                placeholderTextColor="#888"
                secureTextEntry={Props.secureTextEntry}
                keyboardType={Props.keyboardType}/>
        </>
    )
}


const styles = StyleSheet.create({
    TextPlace: {
        backgroundColor: 'white',
        height: '10%',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        margin: '1%',
    }
})