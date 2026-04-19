import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ReturnButtonProps {
  visible: boolean;
  onPress: () => void;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ visible, onPress }) => {
  if (!visible) return null;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>↑</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: { color: '#fff', fontSize: 24 }
});

export default ReturnButton;