import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const MusicInfo = () => {
    useEffect(() => {
        const search = async () => {
            await fetch("https://musicbrainz.org/ws/2/artist/?query=sardou&fmt=json", {
                method: 'GET',
                headers: {
                    'User-Agent': 'Custom User Agent'
                },
            })
                .then((reponse) => {
                    return reponse.json()
                })
                .then((result) => {
                    console.log(result)
                })
        }
        search()
    }, [])
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default MusicInfo;
