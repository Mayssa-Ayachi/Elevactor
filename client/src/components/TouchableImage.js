import React from 'react';
import {TouchableOpacity,Image} from 'react-native';

function TouchableImage(props)
{
    return (
    <TouchableOpacity onPress={()=>props.navigate()} style={props.style} >
          <Image source={props.source} style={props.style} />
          </TouchableOpacity>)
}

export default TouchableImage;