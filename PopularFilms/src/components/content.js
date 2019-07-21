import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
//☆
class Content extends Component {
    setRateStar() {
        var rateStar = null;
        const rate = this.props.film.nota;

        if (rate >= 8) {
            rateStar = "★★★"
        } else if (rate >= 6 && rate < 8) {
            rateStar = "★★"
        } else if (rate < 6 && rate > 0) {
            rateStar = "★"
        } else {
            rateStar = ""
        }
        return rateStar;
    }
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(`https://www.youtube.com/results?search_query=${(this.props.film.titulo)}`)}
                    >
                        <Image
                            source={{ uri: `${(this.props.film.img)}` }}
                            style={{ width: 100, height: 100 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexWrap: "nowrap", flex: 1 }}>
                    <Text style={styles.filmText}>{this.props.film.titulo}</Text>
                    <Text style={styles.filmText}>Year: {this.props.film.ano}</Text>
                    <Text style={styles.filmText}>Rate: {this.props.film.nota} {<Text style={{ color: "yellow", fontSize: 30 }}>{this.setRateStar()}</Text>}</Text>
                </View>
            </View>
        )
    }

} export default Content;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        marginTop: 2,
        flex: 1,
        borderColor: "black",
        borderWidth: 3,

    },
    imageView: {
        flexDirection: "row",
        width: 102,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filmText: {
        marginLeft: 10,
        marginTop: 5,
        color: "blue",
        fontSize: 15,

    }
})