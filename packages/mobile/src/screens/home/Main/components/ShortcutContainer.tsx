import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Caption } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Player } from '@serenity/core';

export const ShortCutContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToHistory = React.useMemo(
    () => () => {
      navigation.navigate('History');
    },
    [navigation],
  );

  const navigateToFavorite = React.useMemo(
    () => () => {
      navigation.navigate('Favorites');
    },
    [navigation],
  );

  const navigateToMostPlayed = React.useMemo(
    () => () => {
      navigation.navigate('MostPlayed');
    },
    [navigation],
  );

  const startSongs = () => {
    dispatch(Player.startRadio());
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 16,
      }}
    >
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={navigateToHistory}
      >
        <Avatar.Icon
          icon="bar-chart-outline"
          color="#46b3e6"
          style={{ backgroundColor: '#46b3e650' }}
        />
        <Caption>History</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={navigateToFavorite}
      >
        <Avatar.Icon
          icon="heart-outline"
          color="#c70d3a"
          style={{ backgroundColor: '#c70d3a50' }}
        />
        <Caption>Favorite</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={navigateToMostPlayed}
      >
        <Avatar.Icon
          icon="trending-up-outline"
          color="#4a47a3"
          style={{ backgroundColor: '#4a47a350' }}
        />
        <Caption>Most Played</Caption>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={startSongs}
      >
        <Avatar.Icon
          icon="radio-outline"
          color="#0c9463"
          style={{ backgroundColor: '#0c946350' }}
        />
        <Caption>Radio</Caption>
      </TouchableOpacity>
    </View>
  );
};
