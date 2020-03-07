import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import Conditional from "../util/Conditional";

const ResultsList = ({title, results}) => {

    return (
        <Conditional condition={results.length}>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>
                <FlatList
                    horizontal
                    data={results}
                    keyExtractor={result => result.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ResultDetail result={item}/>
                    )}
                />
            </View>
        </Conditional>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 5
    }
});

export default ResultsList;
