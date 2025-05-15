import React from 'react';
import {FlatList, View,TouchableOpacity,Text} from 'react-native';
import HeaderComponent from '../../components/header/component';
import {createStyles} from './review.styles';
import InputComponent from '../../components/input/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';
import ReviewComponent from '../../components/review/component';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';
import {navigate} from '../../navigators/navigation-utilities';
import Button from '../../components/button/component';
import { useNavigation } from '@react-navigation/native';
const ReviewScreen = () => {
  const navigation = useNavigation()
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <HeaderComponent title="Reviews" hasBack />
      <View style={styles.main}>
        <InputComponent
          onChangeText={e => console.log(e)}
          leftAction={
            <MaterialIcons color={colors.gray} name="search" size={scale(22)} />
          }
          placeholder="Find Reviews ......"
        />
        <View style={styles.flatListContainer}>
        <FlatList
  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  keyExtractor={(item, index) => index.toString()} // Ensure unique key
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <ReviewComponent containerStyle={styles.reviewCard} fromReview />
  )}
/>

        </View>
        {renderMarginTop(8)}
         <TouchableOpacity 
              style={styles.btn} 
              onPress={() => navigation.navigate('BookingScreen')}
            >
              <Text style={styles.btnText}>Book Now</Text>
            </TouchableOpacity>
        {renderMarginBottom(8)}
      </View>
    </View>
  );
};

export default ReviewScreen;