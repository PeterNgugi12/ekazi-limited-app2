import {StyleSheet} from 'react-native';
export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f4f6',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    sectionHeaderText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#6b7280',
    },
    unreadCount: {
      fontSize: 12,
      color: '#9ca3af',
    },
    notificationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    notificationText: {
      flex: 1,
      marginLeft: 8,
    },
    notificationTitle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    notificationDescription: {
      fontSize: 12,
      color: '#6b7280',
    },
    notificationTime: {
      fontSize: 12,
      color: '#9ca3af',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    modalTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 8,
    },
    modalDescription: {
      fontSize: 14,
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: 16,
    },
    modalActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cancelButton: {
      backgroundColor: '#e5e7eb',
      padding: 8,
      borderRadius: 4,
      flex: 1,
      marginRight: 8,
      alignItems: 'center',
    },
    cancelButtonText: {
      color: '#374151',
    },
    deleteButton: {
      backgroundColor: '#ef4444',
      padding: 8,
      borderRadius: 4,
      flex: 1,
      marginLeft: 8,
      alignItems: 'center',
    },
    deleteButtonText: {
      color: 'white',
    },
    noNotifications: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:400
    },
    noNotificationsImage: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    noNotificationsText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    noNotificationsDescription: {
      fontSize: 14,
      color: '#6b7280',
      textAlign: 'center',
    },
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: '#e5e7eb',
      backgroundColor: 'white',
    },
    selectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    headerButton: {
      color: '#3b82f6',
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    disabledButton: {
      opacity: 0.5,
    },
    checkbox: {
      marginRight: 8,
    },
    selectionActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: '#f3f4f6',
      borderBottomWidth: 1,
      borderColor: '#e5e7eb',
    },
    
    selectAllButton: {
      backgroundColor: '#3b82f6',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
    },
    
    selectAllButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    
  });