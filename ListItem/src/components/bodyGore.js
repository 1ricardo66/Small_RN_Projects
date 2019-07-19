import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image
} from 'react-native';



class bodyGore extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imgs: []

        };
    }


    componentWillMount(){
        this.setState({imgs:{
            img1: {
                link: "https://bloody-disgusting.com/wp-content/uploads/2014/09/STK650383.jpg",
                name: "Spred"
            },

            img2: {
                link: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1007115.jpg",
                name: "Gore shriek"
            },
            img3: {
                link: "https://cdn.nexternal.com/dreamland/images/Ferals_13_Gore.jpg",
                name: "Ferals"
            },
            img4: {
                link: "https://horrornews.net/wp-content/uploads/2017/07/hatchet-comic-0.jpg",
                name: "Hatchet"
            },
            img5: {
                link: "https://www.creativeparamita.com/wp-content/uploads/2019/01/you-can-run-but-you-cant-hide.jpg",
                name: "You can run but you can't hide"
            },
            img6: {
                link: "https://www.heroesassemble.com/ekmps/shops/markashley/images/night-of-the-living-dead-annual-1-gore-variant-cover-avatar-comic-book-5448-p.jpg",
                name: "Night of the living dead"
            },
            img7: {
                link: "https://images-na.ssl-images-amazon.com/images/I/51lp5INWApL._SX329_BO1,204,203,200_.jpg",
                name: "the texas chainsaw massacre"
            },

        }
    })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Gore Stories</Text>
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

                    <Image
                        style={styles.img}
                        source={{ uri: this.state.imgs.img7.link }} />


                </ScrollView>
            </View>
        );
    }

}

export default bodyGore;

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
