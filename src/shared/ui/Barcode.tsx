import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import JsBarcode from 'jsbarcode';

interface BarcodeProps {
  value: string;
}

const BarcodeCard: React.FC<BarcodeProps> = ({ value }) => {
  const encoder = useMemo(() => {
    const enc: any = {};
    try {
      JsBarcode(enc, value, {displayValue: false });
      return enc.encodings[0].data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }, [value]);

  if (!encoder) return null;

  const BarcodeRender = () => {
    const bars = [];
    let current = encoder[0];
    let count = 1;

    for (let i = 1; i < encoder.length; i++) {
      if (encoder[i] === current) {
        count++;
      } else {
        bars.push({ value: current, width: count });
        current = encoder[i];
        count = 1;
      }
    }
    bars.push({ value: current, width: count });

    return bars.map((bar, index) => (
      <View
        key={index}
        style={{
          width: bar.width * 1.5,
          height: 80,
          backgroundColor: bar.value === '1' ? '#000' : 'transparent',
        }}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.barcodeWrapper}>
        <View style={styles.barcodeRow}>{BarcodeRender()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  barcodeWrapper: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  barcodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BarcodeCard;
