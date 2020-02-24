import React, {useState, useEffect} from 'react';
import to from '../helpers/to';
import yelp from '../api/yelp';
import object from '../helpers/object';


const useResults = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const onSearchTermSubmit = async searchTerm => {
        const [error, response] = await to(yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'NYC'
            }
        }));

        if (error) {
            setError(error);
            return;
        }

        object
            .getProperty(response, 'data.businesses')
            .hasValue(value => {
                setResults(value);
            })
    };

    useEffect(() => {
        //TODO: Change to default value
        onSearchTermSubmit('');
    }, []);

    return [results, error, onSearchTermSubmit];
};

export default useResults;
