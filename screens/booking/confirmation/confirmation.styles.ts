import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';
import {scale} from '../../../theme/scale';
import {FontSize} from '../../../theme/font-size';
import {typography} from '../../../theme/typography';

const {width} = Dimensions.get('window');

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    main: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: scale(16),
      paddingBottom: scale(90),
    },
    
    // service Card Styles
    serviceCard: {
      backgroundColor: colors.white,
      borderRadius: scale(12),
      overflow: 'hidden',
      marginTop: scale(16),
      marginBottom: scale(24),
      elevation: 2,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    image: {
      width: '100%',
      height: scale(180),
      
    },
    serviceInfo: {
      padding: scale(16),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    serviceTitle: {
      fontSize: FontSize.FONT_18Px,
      fontFamily: typography.semiBold,
      color: colors.black,
      marginBottom: scale(4),
    },
    serviceSubtitle: {
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.regular,
      color: colors.placeholder,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.button,
      paddingHorizontal: scale(8),
      paddingVertical: scale(4),
      borderRadius: scale(20),
    },
    ratingText: {
      fontFamily: typography.semiBold,
      fontSize: FontSize.FONT_14Px,
      color: colors.black,
      marginLeft: scale(4),
      marginRight: scale(4),
    },
    reviewText: {
      fontFamily: typography.regular,
      fontSize: FontSize.FONT_12Px,
      color: colors.white,
    },
    
    // Section Styles
    section: {
      backgroundColor: colors.white,
      borderRadius: scale(12),
      padding: scale(16),
      marginBottom: scale(16),
      elevation: 2,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: scale(16),
    },
    sectionTitle: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
      color: colors.black,
      marginLeft: scale(8),
    },
    
    // Detail Row Styles
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: scale(12),
    },
    detailIcon: {
      width: scale(24),
      alignItems: 'center',
    },
    detailLabel: {
      flex: 1,
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.regular,
      color: colors.placeholder,
      marginLeft: scale(8),
    },
    detailValue: {
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.semiBold,
      color: colors.black,
    },
    totalLabel: {
      flex: 1,
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
      color: colors.black,
    },
    totalValue: {
      fontSize: FontSize.FONT_18Px,
      fontFamily: typography.bold,
      color: colors.primary,
    },
    
    // Payment Method Styles
    paymentMethod: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(16),
      paddingTop: scale(12),
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    paymentIcon: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(16),
      backgroundColor: colors.button,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: scale(8),
    },
    paymentText: {
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.regular,
      color: colors.black,
    },
    
    // Help Card Styles
    helpCard: {
      backgroundColor: colors.white,
      borderRadius: scale(12),
      padding: scale(16),
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 2,
      shadowColor: colors.button,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    helpIcon: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      backgroundColor: colors.button,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: scale(12),
    },
    helpTextContainer: {
      flex: 1,
    },
    helpTitle: {
      fontSize: FontSize.FONT_14Px,
      fontFamily: typography.semiBold,
      color: colors.black,
      marginBottom: scale(2),
    },
    helpSubtitle: {
      fontSize: FontSize.FONT_12Px,
      fontFamily: typography.regular,
      color: colors.placeholder,
    },
    
    // Footer Styles
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: scale(16),
      backgroundColor: colors.white,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    confirmButton: {
      backgroundColor: colors.button,
      borderRadius: scale(28),
      height: scale(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    confirmButtonText: {
      fontSize: FontSize.FONT_16Px,
      fontFamily: typography.semiBold,
      color: colors.white,
    },
  });