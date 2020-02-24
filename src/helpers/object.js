const Optional = function (value) {

    let privateValue = null;

    class OptionalClass {
        constructor(value) {
            if (!privateValue) {
                privateValue = value;
            }
        }

        hasValue(cb, sync) {
            if (!!privateValue) {
                cb(privateValue);
            }
            if (sync) {
                return privateValue;
            }
            return this;
        };

        noValue(cb) {
            if (!!!privateValue) {
                cb(privateValue);
            }
            return this;
        };
    }

    return new OptionalClass(value);
};


const getProperty = (object, path) => {
    const pathArray = path.split('.');
    const result = pathArray.reduce((acc, curr) => {
        if (acc && typeof acc === 'object') return acc[curr];
    }, object);
    return Optional(result);
};

const createOptional = value => Optional(value);

export default {
    getProperty,
    createOptional
};


