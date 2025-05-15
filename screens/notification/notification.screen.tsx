import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStyles } from './notification.styles';
import HeaderComponent from '../../components/header/component';

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  iconColor: string;
  unread: boolean;
};

const notificationsData: Notification[] = [
  {
    id: '1',
    title: 'Service Request Confirmed',
    description: 'Your booking with a service provider has been confirmed. Check the app for details.',
    time: '10:01 am',
    icon: 'check-circle',
    iconColor: '#3b82f6',
    unread: true,
  },
  {
    id: '2',
    title: 'Payment Successful',
    description: 'Your payment was processed successfully. Your provider will arrive as scheduled.',
    time: '9:01 am',
    icon: 'credit-card',
    iconColor: '#10b981',
    unread: false,
  },
  {
    id: '3',
    title: 'Provider On the Way',
    description: 'Good news! Your service provider is on the way. Get ready!',
    time: '8:45 am',
    icon: 'map-marker',
    iconColor: '#f59e0b',
    unread: false,
  },
  {
    id: '4',
    title: 'Service Completed',
    description: 'Your service was completed. Please rate your provider to help others.',
    time: 'Yesterday',
    icon: 'star',
    iconColor: '#facc15',
    unread: false,
  },
  {
    id: '5',
    title: 'Booking Canceled',
    description: 'Your service booking was canceled. You won’t be charged.',
    time: 'Yesterday',
    icon: 'times-circle',
    iconColor: '#ef4444',
    unread: false,
  },
  {
    id: '6',
    title: 'Special Discount Just for You!',
    description: 'Enjoy 15% off your next booking. Offer valid this weekend only.',
    time: 'Yesterday',
    icon: 'gift',
    iconColor: '#8b5cf6',
    unread: false,
  },
  {
    id: '7',
    title: 'New Provider Available',
    description: 'A top-rated provider is now available in your area. Book now before they’re full!',
    time: 'Yesterday',
    icon: 'user-plus',
    iconColor: '#3b82f6',
    unread: false,
  },
  {
    id: '8',
    title: 'Maintenance Alert',
    description: 'We’ll be updating our app tonight at 11 PM. Bookings will remain unaffected.',
    time: 'Yesterday',
    icon: 'wrench',
    iconColor: '#6b7280',
    unread: false,
  },
];


const NotificationScreen: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData);
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const [selectionMode, setSelectionMode] = useState<boolean>(false);
  const styles = createStyles();

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    setSelectedNotifications([]);
  };

  const toggleSelectNotification = (id: string) => {
    setSelectedNotifications((prev) =>
      prev.includes(id) ? prev.filter((notifId) => notifId !== id) : [...prev, id]
    );
  };

  const deleteSelectedNotifications = () => {
    setNotifications((prev) => prev.filter((notif) => !selectedNotifications.includes(notif.id)));
    setSelectionMode(false);
    setSelectedNotifications([]);
  };

  const selectAll = () => {
    if (selectedNotifications.length === notifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(notifications.map((notif) => notif.id));
    }
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity onLongPress={toggleSelectionMode} onPress={() => selectionMode && toggleSelectNotification(item.id)}>
      <View style={styles.notificationItem}>
        {selectionMode && (
          <FontAwesome
            name={selectedNotifications.includes(item.id) ? 'check-circle' : 'circle-o'}
            size={24}
            color={selectedNotifications.includes(item.id) ? '#3b82f6' : '#ccc'}
            style={styles.checkbox}
          />
        )}
        <FontAwesome name={item.icon} size={24} color={item.iconColor} />
        <View style={styles.notificationText}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
        {item.unread && <FontAwesome name="circle" size={10} color="#3b82f6" />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent title="Notification" hasBack />
      {selectionMode && (
        <View style={styles.selectionActions}>
          <TouchableOpacity onPress={selectAll} style={styles.selectAllButton}>
            <Text>{selectedNotifications.length === notifications.length ? 'Deselect All' : 'Select All'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteSelectedNotifications} style={styles.deleteButton}>
            <Text>Delete Selected</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {notifications.length === 0 && (
        <View style={styles.noNotifications}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/T4g-dvqQLKQEZvMe81sYkc1JMLTqLdZkrv40Sjf3Z1I.jpg' }}
            style={styles.noNotificationsImage}
          />
          <Text style={styles.noNotificationsText}>NO NOTIFICATIONS</Text>
          <Text style={styles.noNotificationsDescription}>
            Cluster Cleared! We'll Notify You When There Is Something New.
          </Text>
        </View>
      )}
    </View>
  );
};

export default NotificationScreen;
