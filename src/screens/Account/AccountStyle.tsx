import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0faff', 
  },
  // 1. Header
  header: {
    backgroundColor: '#2C3E50', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 80, 
  },

  
  headerLogo: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium', 
  },
  langSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langText: {
    color: '#f0faff',
    fontSize: 14,
    fontWeight: '600',
  },
  langArrow: {
    color: '#f0faff',
    fontSize: 10,
    marginTop: 2,
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    color: '#f0faff',
    fontSize: 24,
    marginTop: -4,
  },
  
  // 2. Profile Block
  content: {
    flex: 1,
  },
  profileBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0faff',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0faff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 24,
  },
  profileInfo: {},
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  profilePhone: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 2,
  },
  profileRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bonusBlock: {
    alignItems: 'flex-end',
  },
  bonusCount: {
    fontSize: 12,
    color: '#28677c',
    fontWeight: 'bold',
  },
  bonusIcon: {
    fontSize: 10,
    color: '#28677c',
    fontWeight: 'bold',
  },
  profileArrow: {
    fontSize: 20,
    color: '#BDC3C7',
    marginLeft: 4,
  },
  
  separator: {
    height: 12,
    backgroundColor: '#3c4856', 
  },
  lineDivider: {
    height: 1,
    backgroundColor: '#f0faff', 
    marginHorizontal: 16,
  },
  menuBlock: {
    paddingHorizontal: 16,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ECF0F1',

  },
  lastMenuRow: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIcon: {
    fontSize: 20,
    width: 24,
    textAlign: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#28677c',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  badgeText: {
    color: '#f0faff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  
  locationBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#f0faff',
  },
  
});