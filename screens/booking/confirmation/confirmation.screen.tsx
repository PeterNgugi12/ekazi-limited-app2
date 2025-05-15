import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../../components/header/component';
import StepperComponent from '../../../components/stepper/component';
import {createStyles} from './confirmation.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from '../../../theme/scale';
import {colors} from '../../../theme/colors';
import Button from '../../../components/button/component';
import {navigate} from '../../../navigators/navigation-utilities';

const BookingConfirmationScreen = () => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Booking Confirmation" hasBack />
      <ScrollView 
        style={styles.main}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <StepperComponent active={3} />
        
        {/* service Card */}
        <View style={styles.serviceCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.serviceInfo}>
            <View>
              <Text style={styles.serviceTitle}>City Plumbing</Text>
              <Text style={styles.serviceSubtitle}> Licensed plumber</Text>
            </View>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={scale(16)} color={colors.star} />
              <Text style={styles.ratingText}>5.0</Text>
              <Text style={styles.reviewText}>(100+ Reviews)</Text>
            </View>
          </View>
        </View>

        {/* Booking Information Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="calendar-outline" size={scale(20)} color={colors.primary} />
            <Text style={styles.sectionTitle}>Booking Information</Text>
          </View>
          
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <FontAwesome name="hashtag" size={scale(14)} color={colors.placeholder} />
            </View>
            <Text style={styles.detailLabel}>Booking ID</Text>
            <Text style={styles.detailValue}>#BK124578</Text>
          </View>
          
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <FontAwesome name="user" size={scale(14)} color={colors.placeholder} />
            </View>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={styles.detailValue}>John Doe</Text>
          </View>
          
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <FontAwesome name="map-marker" size={scale(14)} color={colors.placeholder} />
            </View>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>Nairobi, Kenya</Text>
          </View>
          
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <FontAwesome name="clock-o" size={scale(14)} color={colors.placeholder} />
            </View>
            <Text style={styles.detailLabel}>Hire Date</Text>
            <Text style={styles.detailValue}>19 Jan 2024 • 10:00 AM</Text>
          </View>
          
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <FontAwesome name="clock-o" size={scale(14)} color={colors.placeholder} />
            </View>
            <Text style={styles.detailLabel}>End Date</Text>
            <Text style={styles.detailValue}>21 Jan 2024 • 12:00 PM</Text>
          </View>
        </View>

        {/* Payment Information Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="card-outline" size={scale(20)} color={colors.primary} />
            <Text style={styles.sectionTitle}>Payment Summary</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Base Rate (2 days)</Text>
            <Text style={styles.detailValue}>Ksh 1,400</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Service Fee</Text>
            <Text style={styles.detailValue}>Ksh 15</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Taxes</Text>
            <Text style={styles.detailValue}>Ksh 0</Text>
          </View>
          
          <View style={[styles.detailRow, {marginTop: scale(12)}]}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>Ksh 1,415</Text>
          </View>
          
          <View style={styles.paymentMethod}>
            <View style={styles.paymentIcon}>
              <FontAwesome name="money" size={scale(16)} color={colors.black} />
            </View>
            <Text style={styles.paymentText}>Payment Method: Cash</Text>
          </View>
        </View>

        {/* Help Section */}
        <TouchableOpacity style={styles.helpCard}>
          <View style={styles.helpIcon}>
            <Ionicons name="help-circle-outline" size={scale(24)} color={colors.primary} />
          </View>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpTitle}>Need help with your booking?</Text>
            <Text style={styles.helpSubtitle}>Contact our support team</Text>
          </View>
          <Ionicons name="chevron-forward" size={scale(20)} color={colors.placeholder} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={() => navigate('BookingStatusScreen')}
          text="Confirm Booking"
          buttonStyles={styles.confirmButton}
          textStyles={styles.confirmButtonText}
        />
      </View>
    </View>
  );
};

export default BookingConfirmationScreen;