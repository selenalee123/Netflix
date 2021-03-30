﻿import React, { useState, useEffect } from 'react'
import { MaterialIcons, Entypo, AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    FlatList,
    ActivityIndicator,
    View, Text
} from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import movie from '../../assets/data/movie'
import EpisodeItem from '../../components/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer';


const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0]


const MovieDetailsScreen = () => {
    console.log(firstEpisode)
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);


    const seasonNames = movie.seasons.items.map(season => season.name)
    return (
        <View>


            {/* <Image style={styles.image} source={{ uri: firstEpisode.poster }} /> */}

            <VideoPlayer episode={currentEpisode} />
            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({ item }) =>
                    <EpisodeItem
                        episode={item}
                    />}
                style={{ marginBottom: 250 }}
                ListHeaderComponent={(
                    <View style={{ padding: 12 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />
                        </View>

                        {/* Play Button */}
                        <Pressable onPress={() => { console.warn('Plage') }} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={16} color="black" />
                                Play
                            </Text>
                        </Pressable>

                        {/* Download Button */}
                        <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={16} color="white" />
                                {' '}
                                Download
                            </Text>
                        </Pressable>

                        <Text style={styles.plot}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        {/* Row with icon buttons */}
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color={'white'} />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>My List</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name="thumbs-up" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Rate</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <FontAwesome name="send-o" size={24} color="white" />
                                <Text style={{ color: 'darkgrey', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white' }}>
                        </View>
                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ color: 'white', width: 130 }}
                            itemStyle={{ backgroundColor: 'white' }}
                            dropdownIconColor={'white'}
                        >
                            {seasonNames.map(seasonName => (
                                <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                            ))}
                        </Picker>
                    </View>

                )}
            />
        </View>
    )
};

export default MovieDetailsScreen
