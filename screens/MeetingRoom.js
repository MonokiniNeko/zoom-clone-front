import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';

// import BrowserModal from 'modal-react-native-web';
import { isBrowser } from 'react-device-detect'; 

import { io } from "socket.io-client"
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import StartMeeting from '../components/StartMeeting';
import Modal from '../components/ModalChat';

import checkBrowserCompatibility from '../utils/browserCompatibility'; // to check the browser compatible with expo-camera


let socket;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const menuIcons = [
    {
        tile : "microphone",
        name : "Mute",
        customColor : "#efefef"
    },
    {
        tile : "video-camera",
        name : "Stop Video"
    },
    {
        tile : "upload",
        name : "Share Content"
    },
    {
        tile : "group",
        name : "Participants"
    },
];



function MeetingRoom() {

    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [activeUsers, setActiveUsers] = useState([]);
    const [startCamera, setStartCamera] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    



    const __startCamera = async () => {
        if (!checkBrowserCompatibility()) return;
        const { status } = await Camera.requestPermissionsAsync();
        if (status === "granted" && checkBrowserCompatibility()) setStartCamera(true);
        else Alert.alert("Access denied");
    }

    const joinRoom = (roomId, name) => {
        __startCamera();
        socket.emit('join-room',{roomId: roomId, userName: name});

    };

    useEffect(() => {

        const API_URL = "http://localhost:8000";
        socket = io(`${API_URL}`);
        socket.on('connection', ()=>console.log("connected"));
        socket.on("all-users", users => {
            console.log("Active users");
            console.log(users);
            setActiveUsers(users);
        })
    },[]);

    return (
        <View style={styles.container}>
            {/* Start new meeting section */}
            {startCamera && checkBrowserCompatibility() ? (
                <SafeAreaView style={{flex: 1}}>
                    <Modal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    > 
                        
                    </Modal>
                    {/* Active Users */}
                    <View style={styles.activeUsersContainer}>
                        <View style={styles.cameraContainer}>
                            <Camera
                                type={"front"}
                                style={{
                                    width: activeUsers.length < 2 ? windowWidth : 200,
                                    height: activeUsers.length < 2 ? windowHeight-150 : 200
                                }}
                            >  
                            </Camera>
                            {activeUsers.filter(user => user.userName != name).map((user,index)=>
                            <View key={index} style={styles.activeUserContainer}>
                                <Text style={{color: "white"}}>{user.userName}</Text>
                            </View>
                            )}
                        </View>
                    </View>

                    {/* Footer  */}
                    <View style={styles.menu}>
                        {
                            menuIcons.map((icon, index) =>
                                <TouchableOpacity style={styles.tile} key={index}>
                                    <FontAwesome name={icon.tile} size={24} color={icon.customColor || "white"} />
                                    <Text style={styles.textTile}>{icon.name}</Text>
                                </TouchableOpacity>

                            )
                        }
                        <TouchableOpacity
                            onPress={() =>setModalVisible(true)}
                            style={styles.tile}
                        >
                            <FontAwesome name={"comments"} size={24} color={"white"} />
                            <Text style={styles.textTile}>Chat</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>

            ) : (
                <StartMeeting
                name={name }
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
                joinRoom={joinRoom}
            />
            )

            }

        </View>
    )

};

export default MeetingRoom

const styles = new StyleSheet.create({
    container: {
        backgroundColor : "#1c1c1c",
        flex : 1
    },
    cameraContainer : {
        backgroundColor : "black",
        justifyContent : "center",
        flexDirection : "row",
        flexWrap : "wrap"
    },
    tile : {
        justifyContent : "center",
        alignItems : "center",
        height : 50,
        marginTop : 15
    },
    textTile : {
        color : "white",
        marginTop: 10
    },
    menu : {
        flexDirection : "row",
        justifyContent : "space-around",
    },
    activeUsersContainer : {
        backgroundColor : "black",
        flex: 1,
        justifyContent : "center",
    },
    activeUserContainer : {
        borderColor : "grey",
        borderWidth : 1,
        width : 200,
        height : 200,
        justifyContent: "center",
        alignItems: "center"
    }

});