import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import useResult from "../hooks/useResult";
import Conditional from "../util/Conditional";
import object from "../helpers/object";

const ResultsShow = ({navigation}) => {
    const [result, error, searchResult] = useResult(navigation.getParam('id'));

    const name = object.getProperty(result, 'name').getValue();
    const images = object.getProperty(result, 'photos').getValue();

    const renderImage = ({item}) => (
        <Conditional condition={item}>
            <Image source={{uri: item}} style={styles.image}/>
        </Conditional>
    );

    return (
        <View>
            <Conditional condition={name}>
                <Text>
                    {name}
                </Text>
            </Conditional>
            <Conditional condition={images}>
                <FlatList
                    data={images}
                    keyExtractor={image => image}
                    renderItem={renderImage}
                />
            </Conditional>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
});

export default ResultsShow;
