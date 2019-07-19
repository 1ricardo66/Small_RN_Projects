import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image
} from 'react-native';



class bodyStephen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imgs: {
                img1: {
                    link: "https://images-na.ssl-images-amazon.com/images/I/91tIKl2eywL.jpg",
                    name: "Outsider"
                },

                img2: {
                    link: "https://images-na.ssl-images-amazon.com/images/I/51A3IOrcZRL._SX324_BO1,204,203,200_.jpg",
                    name: "Pet Sematary"
                },
                img3: {
                    link: "https://i.pinimg.com/originals/09/49/cb/0949cb58cad8d29b142bf4b38d4f2997.jpg",
                    name: "Night Shift"
                },
                img4: {
                    link: "https://images-na.ssl-images-amazon.com/images/I/A1eP5YuEKmL.jpg",
                    name: "Misery"
                },
                img5: {
                    link: "https://images-na.ssl-images-amazon.com/images/I/4117PWF91KL._SX320_BO1,204,203,200_.jpg",
                    name: "IT"
                },
                img6: {
                    link: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982108298/the-battle-of-jericho-hill-9781982108298_lg.jpg",
                    name: "The batle of Jericho Hill"
                },
                img7: {
                    link: "https://i.imgur.com/84g6sXu.jpg",
                    name: "Stranger Tales Mad Max"
                },

            }

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Stephen King Stories</Text>
                <ScrollView
                    contentContainerStyle={styles.item}
                    horizontal={true}
                >

                    <Image
                        style={{ width: 120, height: 185, }}
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

                    

                </ScrollView>
            </View>
        );
    }

}

export default bodyStephen;

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
        marginLeft: 10,
        width: 120,
        height: 185,
    },
    title: {
        color: "#fff",
        fontSize: 17,
        marginLeft: "2%"

    }

});
