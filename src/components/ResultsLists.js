import React from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import ResultsList from './ResultsList';

const ResultsLists = ({data, results}) => {

    const filterResults = price => results.filter(result => result.price === price);

    return (
        <ScrollView style={styles.container}>
            <FlatList data={data}
                      renderItem={({item, index}) => (
                              <ResultsList
                                  key={item.key}
                                  title={item.title}
                                  results={filterResults(item.price)}
                              />
                      )}
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    }
});

export default ResultsLists;
