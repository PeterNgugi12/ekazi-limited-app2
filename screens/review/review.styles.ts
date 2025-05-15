import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {scale} from '../../theme/scale';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
      paddingHorizontal: scale(18),
    },
    flatListContainer: {
      flex: 1,
    },
    reviewCard: {
      width: '100%',
      marginRight: 0,
      marginTop: scale(14),
    },
    btn: {
      backgroundColor: '#2DA0ED', 
      paddingVertical: 17,
      borderRadius: 78,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20
    },
    btnText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });