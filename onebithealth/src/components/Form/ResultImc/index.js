import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from './style'

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc hoje é: " + props.resultImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberIMC}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                    <TouchableOpacity style={styles.share}
                    onPress={onShare}>
                        <Text style={styles.shareText}>
                               Share
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
