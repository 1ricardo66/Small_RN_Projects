import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image
} from 'react-native';



class bodyHorror extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imgs: []

        };
    }

    componentWillMount(){
        this.setState({imgs:{
            img1: { link: "https://dfb503wu29eo2.cloudfront.net/slir/w450/png24-front-no-genre/bookcover0004120-no-genre.jpg" },
            img2: { link: "https://s26162.pcdn.co/wp-content/uploads/2017/10/the-ritual.jpg" },
            img3: { link: "https://i.pinimg.com/236x/32/7d/40/327d403828463936e9c8753efd8bc3c3--pulp-art-pulp-fiction.jpg" },
            img4: { link: "https://i.pinimg.com/236x/c9/ed/70/c9ed702e9eee3c74ebf26548065b8ff3--retro-horror-vintage-horror.jpg" },
            img5: { link: "http://www.fionajaydemedia.com/sandbox_new/wp-content/uploads/2015/07/TheDevilsCat.jpg" },
            img6: {link: "https://dfb503wu29eo2.cloudfront.net/slir/w450/png24-front-no-genre/bookcover0004803-no-genre.jpg"},
            img7:{link:"https://dfb503wu29eo2.cloudfront.net/slir/w450/png24-front-no-genre/bookcover0000233-no-genre.jpg"},

        }})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Horror Stories</Text>
                <ScrollView
                    contentContainerStyle={styles.item}
                    horizontal={true}
                >

                    <Image
                        style={{width: 120,height: 185,}}
                        source={{ uri: this.state.imgs.img1.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img2.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img3.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img4.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img5.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img6.link }} />

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img7.link }} />


                </ScrollView>
            </View>
        );
    }

}

export default bodyHorror;

const styles = StyleSheet.create({
    bodyHorror: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        paddingTop: 10, 
    },
    
    img: {
        marginLeft:10,
        width: 120,
        height: 185,
    },
    title:{
        color:"#fff",
        fontSize:17,
        marginLeft:"2%"

    }

});
