import {View, Text, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import {createStyles} from './feature.styles';

const FeatureComponent = ({icon, title, description}) => {
  const styles = createStyles();
  return (
    <Pressable style={styles.featureContainer}>
      <Pressable style={styles.featureBorder}>
        <MaterialCommunityIcons
          name={icon}
          color={colors.gray}
          size={scale(20)}
        />
      </Pressable>
      <View>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureInfo}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default FeatureComponent;