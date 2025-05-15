import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import assets from '../../assets';
import {createStyles} from './reset.styles';
import {renderMarginBottom, renderMarginTop} from '../../utils/ui-utils';
import InputComponent from '../../components/input/component';

import {goBack, navigate} from '../../navigators/navigation-utilities';
import Button from '../../components/button/component';

const ResetScreen = () => {
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
              Reset your password
            </Text>
            {renderMarginTop(12)}
            <Text style={styles.infoText}>
              Enter the email address associated with your account and
            </Text>
            <Text style={styles.infoText}>
              we'll send you a link to reset your password.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <InputComponent
              onChangeText={e => console.log(e)}
              placeholder={'Email'}
            />
          </View>
          {renderMarginTop(28)}
          <TouchableOpacity
  onPress={() => navigate('VerifyScreen')}
  style={styles.buttonStyle}
  activeOpacity={0.7}
>
  <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>
          {renderMarginTop(28)}
          <Text
            onPress={() => navigate('SignInScreen')}
            style={[styles.dontHaveText, styles.textCenter]}>
            Return to sign in
          </Text>
        </View>
      </View>

      <Text onPress={() => navigate('SignUpScreen')} style={[styles.dontHaveText, styles.textCenter]}>
        Create a New account?
      </Text>
      {renderMarginBottom(32)}
    </View>
  );
};

export default ResetScreen;