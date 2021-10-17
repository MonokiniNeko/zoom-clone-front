import React from 'react'
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

function Chatheader({setModalVisible}) {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.buttonText} onPress={() => setModalVisible(false)}>Close</Text>
            </Pressable>
            <Text style={styles.heading}>Chat</Text>
            <Entypo name="bell" size={25} color="#efefef"/>
        </View>
    )
}

export default Chatheader;

const styles = StyleSheet.create({
    container: {
        flexDirection : "row",
        justifyContent : "space-between",
        paddingVertical: 20,
        paddingHorizontal : 10
    },
    buttonText : {
        color: "white",
        fontSize : 20
    },
    heading : {
        color: "white",
        fontWeight : "bold"
    }
})
