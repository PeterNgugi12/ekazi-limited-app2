import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import assets from '../../assets';
import { colors } from '../../theme/colors';
import { scale } from '../../theme/scale';
import { renderMarginBottom } from '../../utils/ui-utils';
import { createStyles } from './service.styles';
import FavouriteComponent from '../favourite/component';
import { IServiceComponentProps } from './IService.props';

const ServiceComponent = ({ bottomActions, onPress }: IServiceComponentProps) => {
  const styles = createStyles();
  const { plumber } = assets;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FavouriteComponent favStyles={{ right: scale(18), top: scale(12) }} />
      <View style={styles.carBackground}>
        <Image source={plumber} resizeMode="contain" style={styles.carImage} />
      </View>
      <View style={styles.textContainer}>
        {renderMarginBottom(4)}
        <Text style={styles.title}>Plumber</Text>
        {renderMarginBottom(4)}
        <View style={styles.flex}>
          <Text style={styles.title}>5.0</Text>
          <FontAwesome name="star" size={scale(14)} color={colors.star} />
        </View>
        {renderMarginBottom(4)}
        <View style={[styles.flex]}>
          <MaterialIcons name="location-pin" size={scale(16)} color={colors.gray} />
          <Text style={styles.text}>Nairobi,Kenya</Text>
        </View>
        {renderMarginBottom(6)}
        {bottomActions ? (
          bottomActions
        ) : (
          <View style={[styles.flex, styles.priceContainer]}>
            <View style={[styles.flex]}>
              <SimpleLineIcons name="check" size={scale(14)} color="green" />
              <Text style={[styles.text, styles.textBold, { color: 'green', marginLeft: scale(4) }]}>
                Online
              </Text>
            </View>
            <View style={[styles.flex]}>
              <Text style={[styles.text, styles.textBold, styles.price]}>
                ksh 200/Day
              </Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default ServiceComponent;
