import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const contactsMenuButtons = [
    {
        type :"starred",

    },
    {
        type : "contact",
        name : "John Doe",
        photo : require("../assets/pic01.jpg")
    },
    {
        type : "contact",
        name : "Céline D'Hyon",
        photo : require("../assets/pic02.jpg")
    },
    {
        type : "contact",
        name : "Jean-Edouard Torez",
        photo : require("../assets/pic03.jpg")
    },
    {
        type : "contact",
        name : "Romain Carlin",
        photo : require("../assets/pic04.jpg")
    }
]

function ContactsMenu() {
    return (
        <View style={styles.container}>
            {/* Contact Container */}
            {contactsMenuButtons.map((contact, index) =>
                            <View key={index} style={styles.row}>
                            {/* Image */}
                            {contact.type == "starred" ? (
                                                <View style={styles.starredIcon}>
                                                    <AntDesign name="star" size={30} color="#efefef"/>
                                                </View> ):
                                                (
                                                <View>
                                                        <Image source={contact.photo} style={styles.image}/>
                                                </View>
                                                )    
                        }

                            {/* Text */}
                            <Text style={styles.text}>
                                { contact.name ? contact.name : contact.type}
                            </Text>
                        </View>        
         
            )}

        </View>
    )
}

export default ContactsMenu;

const styles = StyleSheet.create({
    container : {

    },
    row : {
        flexDirection : "row",
        marginTop: 20,
        alignItems: "center"
    },
    starredIcon : {
        backgroundColor:"#333333",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems : "center",
        borderRadius : 20
    },
    image : {
        width : 55,
        height : 55,
        borderRadius : 20
    },
    text : {
        color: "white",
        paddingLeft: 15,
        fontSize: 18
    }
})
