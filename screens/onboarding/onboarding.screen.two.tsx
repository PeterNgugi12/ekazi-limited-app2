import React from 'react';
import { Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { navigate } from '../../navigators/navigation-utilities';
import { createStyles } from './onboarding.styles';
import assets from '../../assets';
import Button from '../../components/button/component';

const OnBoardingScreenTwo = () => {
  const styles = createStyles();
  const { logo, overlayBg, carBg, ekazilogo } = assets;

  return (
    <ImageBackground resizeMode="cover" source={carBg} style={styles.container}>
      <ImageBackground resizeMode="cover" source={overlayBg} style={styles.overLay}>
        <View>
          <View style={styles.logoContainer}>
            <Image resizeMode="contain" source={ekazilogo} style={styles.carLogo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, styles.title2]}>Welcome to Ekazi.</Text>
            <Text style={[styles.title, styles.title2]}>Find Trusted Service Providers.</Text>
            <Text style={[styles.title, styles.title2]}>For Your Everyday Needs.</Text>
          </View>
        </View>
        <View>
          <View style={styles.infoTextContainer}>
            <Text style={[styles.infoText]}>
              Need a plumber, carpenter, mechanic, or nanny? Ekazi connects
            </Text>
            <Text style={[styles.infoText]}>
              you with skilled professionals ready to assist you anytime.
            </Text>
            <Text style={[styles.infoText]}>
              Let’s make your life easier with trusted services.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate('SignInScreen')}
            style={styles.buttonStyle}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

export default OnBoardingScreenTwo;
