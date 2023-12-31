import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable,
    FlatList
} from 'react-native'
import { useState } from 'react'
import ResultImc from './ResultImc'
import styles from './style/'

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])


    function imcCalculator(){
        let heightFormat = height.replace(',', '.')
        let weightFormat = weight.replace(',', '.')
        let totalImc = (weightFormat/(heightFormat * heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
        return setImc(totalImc)
    }


    function validationImc(){
        console.log(imcList)
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual:')
            setTextButton('Calcular novamente')
            setErrorMessage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setTextButton('Calcular')
            setMessageImc('Preencha peso e altura')
        }
    }


    function verificationImc(){
        if(imc == null){
            Vibration.vibrate([0, 100, 300, 100])
            setErrorMessage('Campo obrigatório*')
        }
    }


    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                        <Text style={styles.formLabel}>Altura</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                        <TextInput style={styles.input}
                            onChangeText={setHeight}
                            value={height}
                            placeholder="Ex: 1.75"
                            keyboardType='numeric'
                        ></TextInput>
                        <Text style={styles.formLabel}>Peso</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
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
                </Pressable>
                :
                <View style={styles.result}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity
                            onPress={validationImc}
                            style={styles.buttonCalculator}>
                                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItem}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => item.id}
            />

        </View>
    );
}
