import React from 'react';
import {Image, Pressable, ScrollView, Text, View, TouchableOpacity} from 'react-native';

import assets from '../../../assets';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './edit.styles';
import {renderMarginBottom} from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import {useEdit} from './edit.hook';
import { LinearGradient } from 'expo-linear-gradient';
import InputComponent from '../../../components/input/component';

const EditScreen = () => {
  const styles = createStyles();
  const {person} = assets;
  const {photo, selectImage} = useEdit();
  const source = photo?.uri ? {uri: photo?.uri} : person;

  return (
    <LinearGradient
      colors={['#f7f8fc', '#f1f5fe']}
      style={styles.container}>
      <HeaderComponent title="Edit Profile" hasBack />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Photo Section */}
        <View style={styles.profileSection}>
          <Pressable onPress={selectImage} style={styles.imageContainer}>
            <Image source={source} style={styles.profileImage} />
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)']}
              style={styles.imageOverlay}>
              <Feather name="camera" size={scale(20)} color={colors.white} />
            </LinearGradient>
          </Pressable>
          <Text style={styles.profileName}>John Doe</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <InputComponent
            placeholder="John" 
            containerStyle={styles.input}
            placeholderTextColor={colors.button}
          />

          <Text style={styles.inputLabel}>Last Name</Text>
          <InputComponent 
            placeholder="Doe" 
            containerStyle={styles.input}
            placeholderTextColor={colors.button}
          />

          <Text style={styles.inputLabel}>Email Address</Text>
          <InputComponent
            placeholder="john@example.com"
            containerStyle={styles.input}
            placeholderTextColor={colors.black}
            keyboardType="email-address"
          />

          <Text style={styles.inputLabel}>Phone Number</Text>
          <InputComponent
            placeholder="+0000 000 0000"
            containerStyle={styles.input}
            placeholderTextColor={colors.button}
            keyboardType="phone-pad"
          />

          <Button 
            text="Save Changes" 
            style={styles.saveButton}
            textStyle={styles.buttonText}
            gradient={['#6a7afc', '#903efb']}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default EditScreen;