import React from 'react';
import {FlatList, Text, View} from 'react-native';
import assets from '../../assets';

import HeaderComponent from '../../components/header/component';
import SearchComponent from '../../components/search/component';
import {createStyles} from './home.styles';
import ServiceBrandComponent from '../../components/serviceBrand/component';
import ServiceComponent from '../../components/service/component';

const HomeScreen = () => {
  const styles = createStyles();
  const {tesla} = assets;
  return (
    <View style={styles.container}>
      <HeaderComponent title="Ekazi" />
      <View style={styles.main}>
        <SearchComponent />
        <View style={[styles.showCase, styles.p18]}>
          <Text style={styles.text}>Categories</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => <ServiceBrandComponent text="Plumber" />}
          />
        </View>
        <View style={[styles.showCaseCars, styles.p18]}>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Best Service Providers</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.flexRow}>
            <ServiceComponent />
            <ServiceComponent />
           
          </View>
          <View style={styles.flexRow}>
          <ServiceComponent />
          <ServiceComponent />
           
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;