import { StyleSheet, Dimensions } from 'react-native';
import { THEME } from '../../constants/Theme'; // шлях під себе

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
    padding: 10,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  card: {
    width: (width - 30) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    elevation: 3,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.text,
  },

  brand: {
    color: THEME.placeholder,
    fontSize: 12,
  },

  price: {
    fontSize: 16,
    color: THEME.active,
    fontWeight: 'bold',
    marginTop: 4,
  },

  addButton: {
    backgroundColor: THEME.darkHeader,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 8,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
  },
});