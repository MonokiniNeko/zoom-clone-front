import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function StartMeeting({name, roomId, setName, setRoomId, joinRoom}) {
    return (
        <View style={styles.container}>
            {/* Start new meeting section */}
            <View style={styles.startMeetingContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        placeholder={"Enter Name"}
                        placeholderTextColor={"#767476"}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                <TextInput
                        style={styles.textInput}
                        value={roomId}
                        placeholder={"Enter room id"}
                        placeholderTextColor={"#767476"}
                        onChangeText={text => setRoomId(text)}
                    />
                </View>
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity 
                onPress={() => joinRoom(roomId, name)}
                style={styles.startMeetingButton}
                >
                <Text style={{color : "white", fontWeight : "bold"}}>Start Meeting</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartMeeting


const styles = new StyleSheet.create({
    startMeetingContainer : {

    },
    info : {
        width: "100%",
        height: 50,
        backgroundColor : "#373538",
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderColor : "#484648",
        padding : 12,
        justifyContent: "center",

    },
    textInput : {
        color: "#f9f9f9",
        fontSize : 18
    },
    startMeetingButton : {
        backgroundColor : "#0470DC",
        height : 50,
        width :350,
        marginTop : 20,
        borderRadius: 15,
        justifyContent : "center",
        alignItems : "center",
    }

})