import React from 'react'
import { Image, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { Episode } from '../../types';





interface EpisodeItemProps {
    episode: Episode;
}


const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode } = props;
    return (
        <View>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{episode.title}</Text>
                    <Text style={styles.duration}>{episode.duration}</Text>
                </View>

                <AntDesign name="download" size={24} color={'white'} />
            </View>

            <Text style={styles.plot}>{episode.plot}</Text>
        </View>
    )
}

export default EpisodeItem
