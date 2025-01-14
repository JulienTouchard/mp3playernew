
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
  } from 'react-native-reanimated';

  // This is the default configuration
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });
import React, { useContext } from 'react';
import { Dimensions, Text, View,Image,StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Mp3Context } from '../../Mp3Context';

const CarouselMp3 = () => {
    const mp3Context = useContext(Mp3Context);
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width}
                autoPlay={false}
                data={mp3Context.statePlaylist}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => {}}
                renderItem={({ index }) =>{
                    //
                    return(
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                       <Image source={mp3Context.statePlaylist[mp3Context.stateCurrentTrack].cover}
                       width={width}
                       height={width}
                       ></Image>
                       <Text style={styles.title}>{mp3Context.statePlaylist[mp3Context.stateCurrentTrack].titre}</Text>
                    </View>
                )}}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    title:{
        position:'absolute',
        top:250,
        padding:20,
        zIndex:50,
        fontSize:30,
        fontWeight:'900',
        backgroundColor:'rgba(0,0,0,0.7)',
        color:'#fff',
    }
})
export default CarouselMp3;

