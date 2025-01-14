import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import React, { useContext } from 'react'
import { Mp3Context } from '../../Mp3Context';

const Navigation = () => {
    const mp3Context = useContext(Mp3Context);
    return (
        <View style={styles.navbar}>
            <Button
                icon="step-backward"
                buttonColor="red"
                textColor='white'
                mode="contained"
                onPress={mp3Context.prev}
            >
            </Button>
            <Button
                icon={mp3Context.stateIsPlaying ? "pause" : "play"}
                mode="contained"
                onPress={mp3Context.playPause}
            >
            </Button>
            <Button
             icon="forward"
              mode="contained"
               onPress={mp3Context.next}>
            </Button>
            <Text>{mp3Context.stateCurrentTrack}</Text>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
})