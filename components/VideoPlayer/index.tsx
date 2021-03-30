import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Episode } from '../../types';
import { Playback } from 'expo-av/build/AV';
import styles from './styles';

interface VideoPlayerProps {
    episode: Episode;
}

export default function App(props: VideoPlayerProps) {
    const { episode } = props;
    const [videoURL, setVideoURL] = useState('');


    const video = useRef<Playback>(null);
    const [status, setStatus] = useState({});

    useEffect(() =>{
        if (!video){
            return;
        }
        ( async()=>{
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );

        })();
    },[episode])


    const handleVideoRef = (component) =>{
        const playbackObject =component;
        const source ={
            uri: episode.video
        };
        playbackObject.loadAsync(
            source,
        )
    }

    return (

        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video,
            }}
            posterSource={{
                uri: episode.poster,
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />

    )
}
