import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class ReadStoryScreen extends React.Component{
    render() {
        return(
            <View style = {StyleSheet.container}>
                <Text
                style={{alignSelf:"center",justifySelf:"center",fontSize: 50, fontWeight: "bold"}}
                >Read Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
    
});


