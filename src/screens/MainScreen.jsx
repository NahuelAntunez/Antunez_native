
import { StyleSheet, TextInput, View, TouchableOpacity,Text } from 'react-native'
import React from 'react'

const MainScreen = ({taskList}) => {
return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <TextInput style={styles.imput}/>
            <TouchableOpacity style={styles.button}>
                    <Text>Agregar tarea</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.view2}>
            {taskList.map(item => {
                return (
                    <View style={styles.task} key={item.id}>
                        <Text>{item.task}</Text>
                    </View>
                )
            })}
        </View>
    </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view1:{
        paddingVertical: 30,
        flex:1,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        },
    view2:{
        flex: 2,
        backgroundColor:'grey',
        width:'100%',
        paddingVertical:15,
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    imput:{
        width: 300,
        borderBottomColor: "white",
        borderBottomWidth: 3,
        marginBottom: 8,
    },
    button: {
        paddingHorizontal: 10,
        width: 300,
        backgroundColor: "deepskyblue",
        justifyContent:'center',
    },
    task:{
        width: "80%",
        backgroundColor: "azure",
        padding: 10,
    }
})

