import { View,} from 'react-native';
import React from 'react';

import SearchBar from '../../components/SearchBar';
import ImageSlider from '../../components/ImageSlider';

const Home: React.FC = () => {
    return (
        <View >
            <SearchBar />
            <ImageSlider />
        </View>
    );
}


export default Home;