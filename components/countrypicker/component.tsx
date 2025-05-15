import React from 'react';
import {BottomSheet} from '../bottomSheet/BottomSheet';
import {FlatList, Pressable, Text, View} from 'react-native';
import {createStyles} from './countrypicker.styles';
import {ICountryProps} from './ICountrypicker.props';

const countries = [
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', ph: '+254' },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿', ph: '+255' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬', ph: '+256' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼', ph: '+250' },
  { code: 'BI', name: 'Burundi', flag: '🇧🇮', ph: '+257' },
  { code: 'SS', name: 'South Sudan', flag: '🇸🇸', ph: '+211' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹', ph: '+251' },
  { code: 'SO', name: 'Somalia', flag: '🇸🇴', ph: '+252' },
  { code: 'DJ', name: 'Djibouti', flag: '🇩🇯', ph: '+253' },
  { code: 'ER', name: 'Eritrea', flag: '🇪🇷', ph: '+291' },
  { code: 'MG', name: 'Madagascar', flag: '🇲🇬', ph: '+261' },
  { code: 'MU', name: 'Mauritius', flag: '🇲🇺', ph: '+230' },
  { code: 'KM', name: 'Comoros', flag: '🇰🇲', ph: '+269' },
  { code: 'SC', name: 'Seychelles', flag: '🇸🇨', ph: '+248' }
];

const CountryComponent = ({onPress}: ICountryProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);
  const styles = createStyles();

  return (
    <View>
      <Pressable
        onPress={() => setIsVisible(!isVisible)}
        style={styles.container}>
        <Text style={styles.text}>
          {selectedCountry?.flag}
          {'\t\t'}
          {selectedCountry?.name}
        </Text>
      </Pressable>
      <BottomSheet visible={isVisible} setVisible={setIsVisible}>
        <View style={styles.bottomSheet}>
          <FlatList
            data={countries}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  setSelectedCountry(item);
                  setIsVisible(false);
                  onPress(item);
                }}
                style={styles.itemContainer}>
                <Text style={styles.text}>
                  {item?.flag} {'\t\t'}
                  {item?.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default CountryComponent;