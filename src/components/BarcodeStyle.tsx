import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#f0faff',
    borderRadius: 15,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    // Тінь для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Тінь для Android
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },
  barcodeContainer: {
    padding: 10,
    backgroundColor: '#f0faff',
  },
  valueText: {
    marginTop: 15,
    fontSize: 14,
    color: '#7F8C8D',
    letterSpacing: 2,
  },
});