import React, { createContext, useEffect, useState } from 'react';
import { playlist } from './playlist.js';
import { Audio, Video } from 'expo-av';
const Mp3Context = createContext();

const Mp3Provider = (props) => {
    const [stateCurrentTrack, setStateCurrentTrack] = useState(0);
    const [statePlaylist, setStatePlaylist] = useState(playlist);
    const [stateIsPlaying, setStateIsPlaying] = useState(false);
    const [playbackObject, setPlayBackObject] = useState(null);
    const changeSound = async () => {
        if (playbackObject) {
            await playbackObject.unloadAsync();
        }
        const { sound } = await Audio.Sound.createAsync(statePlaylist[stateCurrentTrack].audio);
        setPlayBackObject(sound);
        if (stateIsPlaying) {
            await sound.playAsync();
        }
    };
    const playPause = async () => {
        if (!stateIsPlaying) {
            if (playbackObject) {
                await playbackObject.playAsync();
            }
        } else {
            if (playbackObject) {
                await playbackObject.pauseAsync();
            }
        }
        setStateIsPlaying(!stateIsPlaying);
    };
    const next = () => {
        if (stateCurrentTrack < statePlaylist.length - 1) {
            setStateCurrentTrack(stateCurrentTrack + 1)
        } else {
            setStateCurrentTrack(0)
        }
    }
    const prev = () => {
        if (stateCurrentTrack > 0) {
            setStateCurrentTrack(stateCurrentTrack - 1)
        } else {
            setStateCurrentTrack(statePlaylist.length - 1)
        }
    }
    useEffect(() => {
        changeSound();
    }, [stateCurrentTrack]);
    return (
        <Mp3Context.Provider value={
            {
                'stateCurrentTrack': stateCurrentTrack,
                'setStateCurrentTrack': setStateCurrentTrack,
                'statePlaylist': statePlaylist,
                'setStatePlaylist': setStatePlaylist,
                'stateIsPlaying': stateIsPlaying,
                'setStateIsPlaying': setStateIsPlaying,
                'playPause': playPause,
                'next': next,
                'prev': prev,
            }
        }>
            {props.children}
        </Mp3Context.Provider>
    );
};
export { Mp3Provider, Mp3Context };
