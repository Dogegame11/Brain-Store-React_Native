import React, { useMemo } from 'react';
import { View, StyleSheet} from 'react-native';
import JsBarcode from 'jsbarcode';

interface BarcodeProps {
  value: string;
}

const BarcodeCard: React.FC<BarcodeProps> = ({ value }) => {
  const encoder = useMemo(() => {
    const enc: any = {};
    try {
      JsBarcode(enc, value, { format: "CODE128", displayValue: false });
      return enc.encodings[0].data; 
    } catch (e) {
        console.log(e)
      return null;
    }
  }, [value]);

  if (!encoder) return null;

  return (
    <View style={styles.container}>
      <View style={styles.barcodeRow}>
        {encoder.split('').map((char: string, index: number) => (
          <View
            key={index}
            style={{
              width: 3,
              height: 100,
              backgroundColor: char === '1' ? '#000' : 'transparent',
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0faff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  barcodeRow: {
    flexDirection: 'row',
  },
});

export default BarcodeCard;