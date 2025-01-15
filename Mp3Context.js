// le context sera mon fichier principal pour distribuer les informations ( sous forme de
// states et les fonctions pour mes différents Components de l'Application)
import React, { createContext, useEffect, useState } from 'react';
import { playlist } from './playlist.js';
import { Audio, Video } from 'expo-av';
const Mp3Context = createContext();

const Mp3Provider = (props) => {
    // le premier state est essentiel il definira l'index dans mon tableau
    // playlist pour la lecture et l'affichage des informations du morceau lu.
    // Etant dans un state chaque mise à jour de cet element modifira tous
    // components dans lesquels il est appelé.
    const [stateCurrentTrack, setStateCurrentTrack] = useState(0);
    // un second state pour le tableau d'objet qui contient les infos musique
    const [statePlaylist, setStatePlaylist] = useState(playlist);
    // un troisieme state me permettra d'appliquer un systeme boolean 
    // a la lecture
    const [stateIsPlaying, setStateIsPlaying] = useState(false);
    // un dernier stoquera l'audio et pourra etre utilisé pour la gestion du temps de 
    // lecture/volume/etc...
    const [playbackObject, setPlayBackObject] = useState(null);

    // Après les state on cree les fonctions pour la gestion du player

    // la première sera charger de charger/decharger l'audio dans le state
    // prevu à cet effet : playbackObject
    // cette fonction utilise des methode expo-av qui sont asynchrome : unloadAsync() et playAsync()
    // et devra donc être elle aussi declarée comme "async" 
    const changeSound = async () => {
        // si mon state audio est différent de null ...
        if (playbackObject) {
            // ... un audio est déjà chargé dans le state et je dois donc le "decharger"
            // sous peine de lire 2 voir plus morceaux en meme temps
            await playbackObject.unloadAsync();
        }
        // je "charge" le nouveau morceau dans le state Audio
        const { sound } = await Audio.Sound.createAsync(statePlaylist[stateCurrentTrack].audio);
        setPlayBackObject(sound);
        // si la demande de lecture a été faite (stateIsPlaying === true)
        // je lance la lecture
        if (stateIsPlaying) {
            await sound.playAsync();
        }
    };
    // La seconde fonction sera appelée à partir du bouton play/pause dans le componant 
    // Navigation et pourra lancer ou mettre en pause le moceau en cours.
    // Cette fonction sera elle aussi asynchrone car elle appelle elle-meme les methodes
    // async de expo-av 
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
        // ici on inverse la status boolean de stateIsPlaying avec le !
        setStateIsPlaying(!stateIsPlaying);
    };
    // Les deux fonctions suivantes sont plus simples et n'ont pas besoin d'async
    // et seront appelées aussi par Navigation.jsx et se contentent de gerer
    // stateCurrentTrack.
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
    // le useEffect ici va aussi etre essentiel pour la gestion de l'application
    // notament parce qu'il "surveille" stateCurrentTrack et qu'a chaque modification de 
    // celui-ci (via next(), pre() ou autre) il va reinitialiser l'Audio en cours
    // dans la fonction changeSound()
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
