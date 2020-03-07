import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const ResultDetail = ({result, navigation}) => {

    const imageSource = {uri: result.image_url};
    const navigateToResultsShowScreen = () => navigation.navigate('ResultsShow', {id: result.id});

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToResultsShowScreen}>
                <Image source={imageSource} style={styles.image}/>
                <Text style={styles.name}>
                    {result.name}
                </Text>
                <Text>
                    {result.rating} Stars, {result.review_count} Reviews
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
});

export default withNavigation(ResultDetail);
