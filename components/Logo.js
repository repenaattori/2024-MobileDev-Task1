import { Button, Image, Text, View } from "react-native";
import logoImg from '../assets/band.png'

export default function Logo(){
    return(
        <View>
            <Text>Amazing music services</Text>
            <Image source={logoImg}/>
            <Button title="REGISTER"></Button>
        </View>
    )
}