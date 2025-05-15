import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createStyles} from './servicebrand.styles';
import assets from '../../assets';
import {renderMarginTop} from '../../utils/ui-utils';
import { IServiceProps } from './IService.props';

const ServiceBrandComponent = ({
  text,
  isHorizontal = false,
  isSelected = 1,
  item,
}: IServiceProps) => {
  const {plumber} = assets;
  const styles = createStyles(isHorizontal, isSelected === item);
  return (
    <Pressable style={[styles.brandContainer]}>
      <View style={styles.brand}>
        <Image resizeMode="contain" source={plumber} style={styles.brandImage} />
      </View>
      {renderMarginTop(4)}
      <Text style={styles.brandText}>{text}</Text>
    </Pressable>
  );
};

export default ServiceBrandComponent;