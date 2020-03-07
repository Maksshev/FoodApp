import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Conditional from '../util/Conditional';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/ResultsLists';

const SearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, error, onSearchTermSubmit] = useResults(searchTerm);

    const onChangeSearchTermText = searchTerm => setSearchTerm(searchTerm);

    const errorMessage = () => (
        <Text>
            Something went wrong
        </Text>
    );

    const categories = [
        {
            title: 'Cost effective',
            price: '$',
            key: '1'
        },
        {
            title: 'A bit pricier',
            price: '$$',
            key: '2'
        },
        {
            title: 'Cozy',
            price: '$$$',
            key: '3'
        }
    ];

    return (
        <View style={{flex: 1}}>
            <SearchBar searchTerm={searchTerm}
                       onChangeText={onChangeSearchTermText}
                       onSubmit={onSearchTermSubmit}
            />
            <Conditional condition={error}
                         render={errorMessage}
            />
            <ResultsLists
                data={categories}
                results={results}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;
