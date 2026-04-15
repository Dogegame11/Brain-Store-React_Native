import { View,} from 'react-native';
import React from 'react';

import SearchBar from '../../shared/ui/SearchBar';
import ImageSlider from '../../features/products/components/ImageSlider';
import TopProductsSection from '../../features/products/components/TopProductsSection';
import CategoryTabs from '../../features/products/components/CategoryTabs';

const Home: React.FC = () => {
    return (
        <View >
            <SearchBar />
            <ImageSlider />
            <TopProductsSection />
            <CategoryTabs />
        </View>
    );
}


export default Home;