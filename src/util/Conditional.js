import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Conditional = ({condition, render, children}) => {
    if (condition) {
        if (render) {
            return render();
        }
        return children;
    }
    return null;
};

const styles = StyleSheet.create({});

export default Conditional;
