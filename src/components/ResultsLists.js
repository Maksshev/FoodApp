import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ResultsList from './ResultsList';

const ResultsLists = ({data, results}) => {

    const filterResults = price => results.filter(result => result.price === price);

    return (
        <View>
            <FlatList data={data}
                      renderItem={({item, index}) => (
                          <ResultsList key={item.key} title={item.title} results={filterResults(item.price)}/>
                      )}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ResultsLists;
