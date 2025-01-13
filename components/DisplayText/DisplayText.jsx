import React, { useContext } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Mp3Context } from '../../Mp3Context';

const DisplayText = () => {
    const mp3Context = useContext(Mp3Context);
    console.log(mp3Context.statePlaylist[mp3Context.stateCurrentTrack].titre) 
    return (
        <Text>
            {mp3Context.statePlaylist[mp3Context.stateCurrentTrack].titre}
        </Text>
    );
}

const styles = StyleSheet.create({})

export default DisplayText;
