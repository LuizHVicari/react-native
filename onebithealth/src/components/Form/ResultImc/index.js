import { View, Text } from 'react-native'
import styles from './style'

export default function ResultImc(props){
    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberIMC}>{props.resultImc}</Text>
        </View>
    );
}
