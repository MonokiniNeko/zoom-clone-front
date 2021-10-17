import React from "react";
import { View, Modal} from 'react-native';
// import {Modal as DesktopModal } from 'react-native-web';
// import { isBrowser } from 'react-device-detect'; 
import Chat from './Chat'
  


function ModalChat({modalVisible, setModalVisible}) {

    // Can't make is work in both mobile and browser even with lazy loader or Platform

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                presentationStyle={"fullscreen"}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                    <Chat
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    >

                    </Chat>
            </Modal>
        </View>   
    )
    



}

export default ModalChat
