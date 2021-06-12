import React from 'react'
import { View, TextInput } from 'react-native'

class SportScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 50 ,borderColor:'black',borderWidth:2}}
                    placeholder="Search"
                    placeholderTextColor={'white'}
                />

            </View>

        )
    }
}

export default SportScreen