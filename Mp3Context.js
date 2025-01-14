import React, { createContext, useState } from 'react';
import { playlist } from './playlist.js';
const Mp3Context = createContext();

const Mp3Provider = (props) => {
    const [stateCurrentTrack, setStateCurrentTrack] = useState(0);
    const [statePlaylist, setStatePlaylist] = useState(playlist);
    const [stateIsPlaying, setStateIsPlaying] = useState(false);
    const playPause = () => {
        setStateIsPlaying(!stateIsPlaying);
    }
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
                'next':next,
                'prev':prev,
            }
        }>
            {props.children}
        </Mp3Context.Provider>
    );
};
export { Mp3Provider, Mp3Context };
