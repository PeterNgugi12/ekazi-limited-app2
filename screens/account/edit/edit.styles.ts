import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {FontSize} from '../../../theme/font-size';
import {typography} from '../../../theme/typography';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: scale(40),
    },
    profileSection: {
      alignItems: 'center',
      paddingVertical: scale(30),
    },
    imageContainer: {
      width: scale(110),
      height: scale(110),
      borderRadius: scale(60),
      marginBottom: scale(15),
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 5,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: scale(60),
      borderWidth: 3,
      borderColor: colors.white,
    },
    imageOverlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: scale(60),
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileName: {
      ...typography.semiBold,
      fontSize: FontSize.FONT_24Px,
      color: colors.black,
      letterSpacing: 0.5,
    },
    formContainer: {
      paddingHorizontal: scale(25),
    },
    inputLabel: {
      ...typography.medium,
      fontSize: FontSize.FONT_14Px,
      color: colors.button,
      marginBottom: scale(8),
      marginLeft: scale(5),
    },
    input: {
      backgroundColor: colors.white,
      borderRadius: scale(12),
      paddingHorizontal: scale(18),
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: scale(20),
      height: scale(50),
    },
    saveButton: {
      height: scale(50),
      borderRadius: scale(12),
      marginTop: scale(15),
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.2,
      shadowRadius: 15,
      elevation: 5,
    },
    buttonText: {
      ...typography.semiBold,
      fontSize: FontSize.FONT_16Px,
      letterSpacing: 0.5,
    },
  });