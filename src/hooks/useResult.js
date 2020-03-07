import React, {useState, useEffect} from 'react';
import yelp from "../api/yelp";
import to from "../helpers/to";
import object from "../helpers/object";

const useResult = (restaurantID) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const searchResult = async () => {
        const [error, result] = await to(yelp.get(`/${restaurantID}`));
        if (error) {
            setError(error);
            return;
        }

        object
            .getProperty(result, 'data')
            .hasValue(data => setResult(data))
            .noValue(() => setError('Restaurant info is not found'))
    };

    useEffect(() => {
        searchResult();
    }, []);

    return [result, error, searchResult];
};

export default useResult;