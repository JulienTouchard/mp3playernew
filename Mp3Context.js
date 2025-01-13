import React, { createContext, useState } from 'react';
import { playlist } from './playlist.js';
const Mp3Context = createContext();

const Mp3Provider = (props) => {
    const [stateCurrentTrack, setStateCurrentTrack] = useState(0);
    const [statePlaylist, setStatePlaylist] = useState(playlist);
    return (
        <Mp3Context.Provider value={
            {
                'stateCurrentTrack':stateCurrentTrack,
                'setStateCurrentTrack':setStateCurrentTrack,
                'statePlaylist':statePlaylist,
                'setStatePlaylist':setStatePlaylist,
            }
        }>
            {props.children}
        </Mp3Context.Provider>
    );
};
export {Mp3Provider,Mp3Context};
