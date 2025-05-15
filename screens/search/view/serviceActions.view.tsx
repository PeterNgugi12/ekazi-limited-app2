import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {createStyles} from '../search.styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import Button from '../../../components/button/component';


const ServiceActionView = () => {
  const styles = createStyles();
  return (
    <View style={[styles.flex, styles.priceContainer]}>
      <View style={[styles.flex]}>
        <Text style={[styles.text, styles.textBold, styles.price]}>
          Ksh 200/Day
        </Text>
      </View>
      <Button
        text="Book now"
        buttonStyles={styles.buttonStyles}
        textStyles={styles.textStyles}
      />
    </View>
  );
};

export default ServiceActionView;