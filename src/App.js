import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from "./components/SearchBar";



const App = () => {
    const [list, setList] = useState(music_data);

    const renderSong = ({item}) => <SongCard song={item} />

    const renderSeparator = () => <View style={styles.separator} />

    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searcedText = text.toLowerCase();
            const currentTitle = song.title.toLocaleLowerCase();
            const currentArtist = song.artist.toLowerCase();
            const currentAlbum = song.album.toLowerCase();

          return  currentTitle.indexOf(searcedText) > -1
          || currentArtist.indexOf(searcedText) > -1
          || currentAlbum.indexOf(searcedText) > -1
        });
        
        setList(filteredList);
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onSearch={handleSearch}/>
            <FlatList
            data={list}
            renderItem={renderSong}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={renderSeparator}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {flex: 1},
    separator: {
        borderWidth:1,
        borderColor: '#e0e0e0',
    },
})

export default App