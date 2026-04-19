import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = width / 2; 

export const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start', 
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#e0e0e0', 
    position: 'relative',
  },

  topActions: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10, 
    alignItems: 'center',
    gap: 8, 
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 20,
    padding: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  actionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginVertical: 10,
  },

  pointsText: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    alignItems: 'center',
     flexDirection: 'row',
  },
  title: {
    fontSize: 13,
    color: '#333',
    height: 36,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  currency: {
    fontSize: 12,
    marginLeft: 2,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#1E2D3E', 
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
});