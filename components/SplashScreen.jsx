import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInserts } from 'react-native-safe-area-context';
export default function SplashScreen() {
    //safearea value
    const edges = useSafeAreaInserts();
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor:'#4D4A95'
        }}
        >

        </View>
    );
}