import React, { useEffect, useState } from 'react';
import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';
import MovieItem from '../../components/MovieItem';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Category, Movie } from '../../src/models';

interface HomeCategoryProps {
    category: Category,

}


const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    const navigation = useNavigation();
    const MoviePress = (movie) => {
      navigation.navigate('MovieDetailsScreen', {id:movie.id});
    }
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => MoviePress(item)} >
                        <Image style={styles.image} source={{ uri: item.poster }} />
                    </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
}

export default HomeCategory;