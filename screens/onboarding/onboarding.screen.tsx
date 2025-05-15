import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { createStyles } from './onboarding.styles';
import assets from '../../assets';
import { navigate } from '../../navigators/navigation-utilities';

const OnBoardingScreen = () => {
    const styles = createStyles();
    const { carBg, logo, overlayBg,ekazilogo } = assets;

    return (
        <ImageBackground
            resizeMode='cover'
            style={styles.container}
            source={carBg}
        >
            <ImageBackground
                resizeMode='cover'
                source={overlayBg}
                style={styles.overLay}
            >
                <View style={styles.textContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            resizeMode='contain'
                            source={ekazilogo}
                            style={styles.carLogo}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Welcome To</Text>
                        <Text style={styles.title}>EKAZI</Text>
                    </View>
                </View>

                {/* Custom TouchableOpacity Button */}
                <TouchableOpacity
                    onPress={() => navigate('OnBoardingScreenTwo')}
                    style={styles.buttonStyle}
                    activeOpacity={0.7} // Adjust opacity when pressed
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ImageBackground>
    );
};

export default OnBoardingScreen;