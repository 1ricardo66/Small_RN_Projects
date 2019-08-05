import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image
} from 'react-native';



const Teen = (props) => {
    return (
        <View style={styles.container}>
            

                <Image
                    style={{ width: 120, height: 185, }}
                    source={{ uri: props.teen.image }} />

                    




            
        </View>
    );
}




export { Teen };

const styles = StyleSheet.create({
    bodyHorror: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    

    img: {
        marginLeft: 10,
        width: 120,
        height: 185,
    },
    title: {
        color: "#fff",
        fontSize: 17,
        marginLeft: "2%"

    },
    container:{
        padding:5
    }

});
