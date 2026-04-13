import { View,} from 'react-native';
import React from 'react';

import SearchBar from '../../shared/ui/SearchBar';
import ImageSlider from '../../features/products/components/ImageSlider';

const Home: React.FC = () => {
    return (
        <View >
            <SearchBar />
            <ImageSlider />
        </View>
    );
}


export default Home;