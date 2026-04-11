import React, { useState, useRef, useCallback } from 'react';
import { 
  View,  
  Image, 
  FlatList, 
  StyleSheet, 
  Dimensions, 
  NativeSyntheticEvent, 
  NativeScrollEvent 
} from 'react-native';


const { width: SCREEN_WIDTH } = Dimensions.get('window');


const SLIDER_HEIGHT = 200; 
const DOT_SIZE = 8;        
const DOT_SPACING = 8;    


const SLIDE_DATA = [
  { id: '1', image: require('../assets/Slides/1.jpg'), title: '' },
  { id: '2', image: require('../assets/Slides/2.jpg'), title: '' },
  { id: '3', image: require('../assets/Slides/3.jpg'), title: '' },
  { id: '4', image: require('../assets/Slides/4.jpg'), title: '' },
];

const SlideItem: React.FC<{ item: typeof SLIDE_DATA[0] }> = ({ item }) => (
  <View style={styles.slide}>
    <Image 
      source={item.image} 
      style={styles.image} 
      resizeMode="cover" 
    />
    
  </View>
);

const PaginationDots: React.FC<{ data: any[], activeIndex: number }> = ({ data, activeIndex }) => (
  <View style={styles.paginationContainer}>
    {data.map((_, index) => {
      const isActive = index === activeIndex;
      return (
        <View 
          key={index} 
          style={[
            styles.dot, 
            isActive ? styles.dotActive : styles.dotInactive
          ]} 
        />
      );
    })}
  </View>
);


const ImageSlider: React.FC = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentOffset = event.nativeEvent.contentOffset.x;
    
    const currentIndex = Math.round(currentOffset / slideSize);
    
    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [activeIndex]);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={SLIDE_DATA}
        renderItem={({ item }) => <SlideItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        snapToInterval={SCREEN_WIDTH} 
        decelerationRate="fast"
        onScroll={onScroll} 
        scrollEventThrottle={16} 
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={styles.flatListContent}
      />
      
      <PaginationDots data={SLIDE_DATA} activeIndex={activeIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SLIDER_HEIGHT,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  flatListContent: {

  },
  slide: {
    width: SCREEN_WIDTH, 
    height: SLIDER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 40, 
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.4)', 
    padding: 10,
    borderRadius: 8,
  },
  slideTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  paginationContainer: {
    position: 'absolute',
    bottom: 15, 
    flexDirection: 'row',
    alignSelf: 'center', 
    backgroundColor: 'rgba(255,255,255,0.9)', 
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2, 
    marginHorizontal: DOT_SPACING / 2, 
  },
  dotActive: {
    backgroundColor: '#28677c', 
    transform: [{ scale: 1.2 }], 
  },
  dotInactive: {
    backgroundColor: '#999',
    opacity: 0.6,
  },
});

export default ImageSlider;