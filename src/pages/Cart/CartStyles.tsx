import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyIcon: { fontSize: 60, marginBottom: 20 },
  emptyTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8, color: '#2C3E50' },
  emptySubtitle: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#2C3E50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontWeight: '600' },

  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    resizeMode: 'contain',
    backgroundColor: '#f9f9f9',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#27AE60',
  },
  itemQuantity: {
    fontSize: 13,
    color: '#7F8C8D',
    marginTop: 2,
  },
  deleteButton: {
    padding: 10,
    marginLeft: 5,
  },
  deleteButtonText: {
    color: '#E74C3C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    marginTop: 10,
  },

  bottomSection: {
    paddingBottom: 80
  },
  totalLabel: {
    fontSize: 18,
    color: '#7F8C8D',
  },
  totalPriceText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2C3E50',
  },
  checkoutButton: {
    backgroundColor: '#2C3E50',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 0, 
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});