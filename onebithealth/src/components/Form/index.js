import { TextInput, View, Text, TouchableOpacity, Vibration } from 'react-native'
import { useState } from 'react'
import ResultImc from './ResultImc'
import styles from './style/'

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator(){
        return setImc(
            (weight/(height * height)).toFixed(2)
        )
    }

    function validationImc(){
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual:')
            setTextButton('Calcular novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha peso e altura')
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType='numeric'
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 80.25"
                    keyboardType='numeric'
                ></TextInput>
                <TouchableOpacity
                    onPress={validationImc}
                    style={styles.buttonCalculator}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
