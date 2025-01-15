import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { Mp3Provider} from './Mp3Context.js';
import DisplayText from './components/DisplayText/DisplayText';
import CarouselMp3 from './components/CarouselMp3/CarouselMp3.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { Audio } from 'expo-av';
import MusicInfo from './components/MusicInfo/MusicInfo.jsx';

const App = () => {
    useEffect(() => {
        const initAudio = async () => {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                staysActiveInBackground: true,
            });
        };
        initAudio();
    }, []);
    return (
        <Mp3Provider>
            <DisplayText/>
            <CarouselMp3/>
            <Navigation/>
            <MusicInfo/>
        </Mp3Provider>
    );
};


export default App;
