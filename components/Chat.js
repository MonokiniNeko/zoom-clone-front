import React, {useState} from 'react'
import {View, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native';
import Chatheader from './ChatHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Chat({setModalVisible, modalVisible}) {

    const [messageText, setMessageText] = useState()
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height: '100%'}}>
                <KeyboardAvoidingView
                    behavior={(Platform.OS === "ios")? "padding" : "height"}
                    style={{flex : 1}}
                > 
                    <TouchableWithoutFeedback>
                        <View style={{flex : 1}}>
                        <Chatheader setModalVisible={setModalVisible}/>
                        {/* Chat Messages */}
                        <View style={styles.chatMessages}>

                        </View>
                        {/* Type Messages */} 
                        <View style={styles.chatFormContainer}>
                            <Text style={{color: "white"}}>Send to: everyone</Text>
                            <View style={styles.chatForm}>
                                <TextInput 
                                style={styles.textInput}
                                placeholder="Tap here to chat"
                                placeholderTextColor="#595859"
                                messageText={messageText}
                                onChangeText={text => setMessageText(text)}
                                />
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        {backgroundColor : messageText ? "#0B71EB" : styles.button.backgroundColor}]
                                    }
                                >
                                    <FontAwesome name={"send"} size={18} color="#efefef"></FontAwesome>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#1c1c1c"
    },
    chatMessages : {
        flex: 1
    },
    chatFormContainer : {
        borderColor : "#2f2f2f",
        borderTopWidth : 1,
        padding : 12
    },
    chatForm : {
        flexDirection : "row",
    },
    textInput : {
        height : 40,
        color: "#efefef",
        borderColor : "#595859",
        borderWidth : 1,
        borderRadius : 10,
        padding : 10,
        marginTop : 12,
        flex: 1
    },
    button : {
        height: 40,
        width : 40,
        marginTop : 12,
        marginLeft : 12,
        backgroundColor : "#373838",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
    }
})
