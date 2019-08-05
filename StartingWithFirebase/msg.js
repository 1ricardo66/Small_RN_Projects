import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default (props)=>(
    <View> 
        <Text> {props.msg.id}- {props.msg.nome}: {props.msg.msg}</Text>
    </View>
)
