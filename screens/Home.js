import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import Header from '../components/Header.js';
import Searchbar from '../components/Searchbar.js';
import MenuButtons from '../components/MenuButtons.js';
import ContactsMenu from '../components/ContactsMenu.js';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height : '100%'}}>
                <Header/>
                <Searchbar/>
                <MenuButtons navigation={navigation}/>
                <ContactsMenu/>
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = new StyleSheet.create({
    container: {
        backgroundColor : "#1c1c1c",
        padding: 15
    }
})