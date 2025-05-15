import React from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import assets from '../../assets';
import FeatureComponent from '../../components/feature/component';
import HeaderComponent from '../../components/header/component';
import ReviewComponent from '../../components/review/component';
import {navigate} from '../../navigators/navigation-utilities';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import { useNavigation } from '@react-navigation/native';
import {
  renderBoderBottom,
  renderMarginBottom,
  renderMarginTop,
} from '../../utils/ui-utils';

import ImageSlider from '../../components/slider/compnent';
import { createStyles } from './service.styles';
import Button from '../../components/button/component';

const ServiceScreen = () => {
  const navigation = useNavigation()
  const {person} = assets;
  const styles = createStyles();
  const data = [
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1629455739628-5e4f16a5dc45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1621397381164-3ec136b8e0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];
  return (
    <View style={styles.container}>
      <HeaderComponent title="Service Provider Details" hasBack />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
        <ImageSlider images={data} />
        {renderMarginTop(12)}
        <View style={styles.main}>
          <View>
            <View style={styles.titleContainer}>
              <View style={styles.flex}>
                <Text style={styles.title}>City Plumbing Experts</Text>
                <Text style={styles.text}>
                  Licensed professional plumbers with 15+ years experience in residential and commercial services
                </Text>
              </View>
              <View>
                <View style={styles.reviewContainer}>
                  <Text style={styles.textBold}>4.9</Text>
                  <FontAwesome
                    name="star"
                    size={scale(18)}
                    color={colors.star}
                  />
                </View>
                <Text style={[styles.text]}>(245 Reviews)</Text>
              </View>
            </View>
            {renderMarginBottom(12)}
            {renderBoderBottom(2)}
            {renderMarginTop(18)}
            <View style={styles.profile}>
              <View style={styles.cg14}>
                <Image source={person} style={styles.person} />
                <View>
                  <Text style={styles.ownerName}>Mike Johnson</Text>
                  <Text style={styles.text}>Licensed Master Plumber</Text>
                </View>
              </View>
              <View style={styles.cg14}>
                <Pressable style={styles.iconBorder}>
                  <Feather name="phone" size={scale(22)} color={colors.gray} />
                </Pressable>
                <Pressable style={styles.iconBorder}>
                  <AntDesign
                    name="message1"
                    size={scale(20)}
                    color={colors.gray}
                  />
                </Pressable>
              </View>
            </View>
            {renderMarginTop(18)}
            <View>
              <Text style={styles.title}>Services Offered</Text>
              {renderMarginTop(12)}
              <View style={styles.cg14}>
                <FeatureComponent 
                  icon="pipe-wrench" 
                  title="Emergency"
                  description="24/7 Service"
                />
                <FeatureComponent 
                  icon="water-pump" 
                  title="Leak Repair"
                  description="Pipes & Fixtures"
                />
                <FeatureComponent 
                  icon="shower-head" 
                  title="Installation"
                  description="Fixtures & Appliances"
                />
              </View>
              {renderMarginTop(12)}
              <View style={styles.cg14}>
                <FeatureComponent 
                  icon="fire-hydrant" 
                  title="Water Heating"
                  description="Repair & Installation"
                />
                <FeatureComponent 
                  icon="pipe-leak" 
                  title="Drain Cleaning"
                  description="Clog Removal"
                />
                <FeatureComponent 
                  icon="toolbox" 
                  title="Maintenance"
                  description="Preventive Checks"
                />
              </View>
            </View>
            {renderMarginTop(18)}
            <View style={styles.profile}>
              <Text style={styles.title}>Reviews (245)</Text>
              <Text
                onPress={() => navigate('ReviewScreen')}
                style={styles.text}>
                See All
              </Text>
            </View>
            {renderMarginTop(12)}
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3]}
              renderItem={() => <ReviewComponent />}
            />
          </View>
        </View>
      </ScrollView>
      <Button
        onPress={() => navigate('BookingDetailsScreen')}
        text="Book Now"
        buttonStyles={styles.btn}
      />
      {renderBoderBottom(6)}
    </View>
  );
};

export default ServiceScreen;