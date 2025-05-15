import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import HeaderComponent from '../../components/header/component';
import SearchComponent from '../../components/search/component';
import {useSearch} from './search.hook';
import {createStyles} from './search.styles';

import FilterView from './view/filter.view';
import {navigate} from '../../navigators/navigation-utilities';
import ServiceBrandComponent from '../../components/serviceBrand/component';
import ServiceComponent from '../../components/service/component';
import ServiceActionView from './view/serviceActions.view';

const SearchScreen = () => {
  const styles = createStyles();
  const {showFilter, setShowFilter} = useSearch();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Search" hasBack />
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}>
        <SearchComponent onFilterPress={() => setShowFilter(!showFilter)} />
        <View style={[styles.showCase, styles.p18]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => (
              <ServiceBrandComponent
                item={item}
                text="Plumber"
                isHorizontal
                isSelected={1}
              />
            )}
          />
        </View>
        <View style={[styles.showCaseCars, styles.p18]}>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Recommend For You</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          <View style={styles.flexRow}>
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
          </View>
          <View style={styles.flexRow}>
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
          </View>
          <View style={styles.flexRow}>
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
            <ServiceComponent
              onPress={() => navigate('rootStack')}
              bottomActions={<ServiceActionView />}
            />
          </View>
        </View>
        <FilterView visible={showFilter} setVisible={setShowFilter} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;