import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';

export default function chemicalLevel() {
    const [range, setRange] = useState('50%');
    const [sliding, setSliding] = useState('Inactive');

    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{sliding}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

