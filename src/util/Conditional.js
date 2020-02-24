import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Conditional = ({condition, render}) => {
    if (condition) {
        return render();
    }
    return null;
};

const styles = StyleSheet.create({});

export default Conditional;
