import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import object from '../helpers/object';

const ResultDetail = ({result}) => {

    const imageSource = {uri: result.image_url};

    return (
        <View>
            <Image source={imageSource} style={styles.image}/>
            <Text style={styles.name}>
                {result.name}
            </Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetail;
