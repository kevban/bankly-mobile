import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color='purple'/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    marginVerticle: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Spinner;