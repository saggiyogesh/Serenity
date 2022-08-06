import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SongProps } from '@serenity/core';
import { DefaultImage } from '../../../components/DefaultImage';
import { Text } from '@serenity/components';

export interface TrackProps {
    track: SongProps;
    onPress: (track: SongProps) => void;
}

export function Book({ track, onPress }: TrackProps) {
    return (
        <TouchableOpacity
            style={[styles.item]}
            onPress={() => onPress(track)}
        >
            {track?.cover ? (
                <FastImage
                    source={{
                        uri: track.cover,
                    }}
                    style={[styles.photo]}
                />
            ) : (
                <DefaultImage style={styles.photo} />
            )}

            <Text numberOfLines={2} style={styles.title}>
                {track?.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        marginBottom: 4,
        marginLeft: 12,
        width: 140,
    },
    title: {
        fontSize: 12,
        marginTop: 8,
        padding: 0,
        fontFamily: 'Nunito-Bold',
        includeFontPadding: false,
    },
    photo: {
        elevation: 4,
        height: 220,
        width: 140,
        backgroundColor: 'gray'
    },
});

