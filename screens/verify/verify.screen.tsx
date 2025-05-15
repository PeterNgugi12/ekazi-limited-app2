import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import assets from '../../assets';

import InputComponent from '../../components/input/component';
import {renderMarginTop} from '../../utils/ui-utils';

import CountryComponent from '../../components/countrypicker/component';
import {navigate} from '../../navigators/navigation-utilities';
import Button from '../../components/button/component';
import { createStyles } from './verify.styles';

const VerifyScreen = () => {
  const styles = createStyles();
  const {logo_black,ekazilogo} = assets;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.flexRow}>
          <Image source={ekazilogo} style={styles.carLogo} />
          <Text style={styles.titleStyle}>Ekazi</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, styles.textCenter]}>
              Verify your phone number
            </Text>
            {renderMarginTop(12)}
            <Text style={styles.infoText}>
              We have sent you an SMS with a code to number
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <CountryComponent onPress={e => console.log(e)} />
            <InputComponent
              onChangeText={e => console.log(e)}
              placeholder={'Phone Number'}
            />
          </View>
          {renderMarginTop(28)}
             <TouchableOpacity
           onPress={() => navigate('OtpScreen')}
           style={styles.buttonStyle}
           activeOpacity={0.7}
         >
           <Text style={styles.buttonText}>Continue</Text>
         </TouchableOpacity>
          {renderMarginTop(28)}
        </View>
      </View>
    </View>
  );
};

export default VerifyScreen;