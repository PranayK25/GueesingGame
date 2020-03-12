import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../Constants/colors'

const Heading = (props) => {
    return(
        <View style={styles.heading}>
            <Text style={styles.headingTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        width: '100%',
        paddingTop: 45,
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    headingTitle: {
        fontSize: 20,
        color: 'black',
        padding: 10
    }
});

export default Heading;