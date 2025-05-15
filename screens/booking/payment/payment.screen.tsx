import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import {createStyles} from './payment.styles';
import StepperComponent from '../../../components/stepper/component';
import {renderMarginBottom} from '../../../utils/ui-utils';
import Button from '../../../components/button/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {BottomSheet} from '../../../components/bottomSheet/BottomSheet';
import InputComponent from '../../../components/input/component';
import CountryComponent from '../../../components/countrypicker/component';
import CheckBoxComponent from '../../../components/checkbox/component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate} from '../../../navigators/navigation-utilities';
import VisaCard from '../../../components/visacard/component';

const BookingPaymentScreen = () => {
  const styles = createStyles();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('Credit Card');

  return (
    <View style={styles.container}>
      <HeaderComponent title="Payment Methods" hasBack />
      <ScrollView style={styles.main}>
        <StepperComponent active={2} />
        {renderMarginBottom(6)}
        
        {selectedPayment === 'Credit Card' && <VisaCard />}
        {renderMarginBottom(6)}

        <View style={styles.inputContainer}>
          <Text style={styles.lableText}>Select payment method</Text>
          <Pressable style={styles.selectPayment}>
            <View style={styles.rg}>
              <FontAwesome name="money" size={scale(18)} color={colors.gray} />
              <Text style={styles.selectPaymentText}>{selectedPayment}</Text>
            </View>
            <Button
              text="CHANGE"
              buttonStyles={styles.butonStyles}
              textStyles={styles.buttonText}
              onPress={() => setShowPayment(true)}
            />
          </Pressable>

          {renderMarginBottom(22)}

          {selectedPayment === 'Credit Card' ? (
            <>
              <Text style={styles.lableText}>Card information</Text>
              <InputComponent
                onChangeText={e => console.log(e)}
                placeholder="Full Name"
              />
              <InputComponent
                onChangeText={e => console.log(e)}
                placeholder="Email Address"
              />
              <InputComponent
                onChangeText={e => console.log(e)}
                placeholder="Number"
              />
              <View style={styles.rg}>
                <InputComponent
                  containerStyle={styles.inputStyle}
                  onChangeText={e => console.log(e)}
                  placeholder="MM/YY"
                />
                <InputComponent
                  containerStyle={styles.inputStyle}
                  onChangeText={e => console.log(e)}
                  placeholder="CVV"
                />
              </View>
            </>
          ) : selectedPayment === 'M-Pesa' ? (
            <>
              <Text style={styles.lableText}>M-Pesa Information</Text>
              <InputComponent
                onChangeText={e => console.log(e)}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />
              <Text style={styles.noteText}>
                You'll receive a payment prompt on your phone
              </Text>
            </>
          ) : (
            <Text style={styles.noteText}>
              Please prepare cash for your payment
            </Text>
          )}

          {selectedPayment !== 'Cash Payment' && (
            <>
              {renderMarginBottom(22)}
              <Text style={styles.lableText}>Country or region</Text>
              <CountryComponent onPress={e => console.log(e)} />
              <InputComponent
                onChangeText={e => console.log(e)}
                placeholder="ZIP"
              />
            </>
          )}

          {renderMarginBottom(12)}
          <View style={styles.flexRow}>
            <CheckBoxComponent
              onPress={e => console.log('item', e)}
              isChecked={false}
            />
            <Text style={styles.checkBoxText}>Terms & Continue</Text>
          </View>

          {selectedPayment === 'Credit Card' && (
            <>
              <View style={styles.borderContainer}>
                <View style={styles.orBorder} />
                <Text style={styles.orText}>Pay with card Or</Text>
                <View style={styles.orBorder} />
              </View>
              {renderMarginBottom(12)}
              <Button
                text="Apple Pay"
                textStyles={styles.outlineButtonText}
                buttonStyles={styles.iconButtonStyle}
                component={<MaterialIcons name="apple" size={scale(26)} />}
              />
              {renderMarginBottom(14)}
              <Button
                text="Google Pay"
                textStyles={styles.outlineButtonText}
                buttonStyles={styles.iconButtonStyle}
                component={<AntDesign name="google" size={scale(20)} />}
              />
            </>
          )}

          {renderMarginBottom(24)}
          <Button
  text={
    selectedPayment === 'M-Pesa' 
      ? 'Request M-Pesa Payment' 
      : 'Pay Now'
  }
  onPress={() => {
    if (selectedPayment === 'M-Pesa') {
      // Handle M-Pesa payment logic
      console.log('Handling M-Pesa payment...');
      navigate('BookingConfirmationScreen');
    } else if (selectedPayment === 'Credit Card') {
      // Handle credit card payment logic
      console.log('Handling Credit Card payment...');
      navigate('BookingConfirmationScreen');
    } else {
      // Handle cash payment logic
      console.log('Handling Cash payment...');
      navigate('BookingConfirmationScreen');
    }
  }}
/>
        </View>

        <BottomSheet visible={showPayment} setVisible={setShowPayment}>
          <View style={styles.paymentContainer}>
            <Text
              onPress={() => {
                setSelectedPayment('Credit Card');
                setShowPayment(false);
              }}
              style={styles.paymentText}>
              Credit Card
            </Text>
            <Text
              onPress={() => {
                setSelectedPayment('Cash Payment');
                setShowPayment(false);
              }}
              style={styles.paymentText}>
              Cash Payment
            </Text>
            <Text
              onPress={() => {
                setSelectedPayment('M-Pesa');
                setShowPayment(false);
              }}
              style={styles.paymentText}>
              M-Pesa
            </Text>
          </View>
        </BottomSheet>
      </ScrollView>
    </View>
  );
};

export default BookingPaymentScreen;