import React, { useState } from 'react';
import {
  Text,
  StyleSheet, 
  ScrollView,
  View,
  TouchableOpacity,
  Switch,
  Modal,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { Avatar, Button, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterNavigator from '../FooterNavigator/FooterNavigator';
import { useNavigation } from '@react-navigation/native';
import { useClerk } from '@clerk/clerk-react';
import Header from '../Commons/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const { width } = useWindowDimensions();
  const [darkMode, setDarkMode] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [faqsVisible, setFaqsVisible] = useState(false);
  const { signOut } = useClerk();
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false);

  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset it.',
    },
    {
      question: 'How do I change my profile picture?',
      answer: 'To change your profile picture, go to "Account Information" and select "Edit Profile".',
    },
    {
      question: 'Can I switch to dark mode?',
      answer: 'Yes! You can toggle dark mode on or off in the settings under "Dark Mode".',
    },
  ];

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'];

  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      // Add account deletion logic here
      await signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Delete account error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.itemIcon}>
              <MaterialCommunityIcons name="account" size={24} color="#893571" />
            </View>
            <Text style={styles.itemText}>Account Information</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          <Divider style={styles.divider} />

          <TouchableOpacity style={styles.settingsItem}>
            <View style={styles.itemIcon}>
              <MaterialCommunityIcons name="map-marker" size={24} color="#893571" />
            </View>
            <Text style={styles.itemText}>Address Information</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          <Divider style={styles.divider} />
          
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => setFaqsVisible(!faqsVisible)}
          >
            <View style={styles.itemIcon}>
              <MaterialCommunityIcons name="help-circle-outline" size={24} color="#893571" />
            </View>
            <Text style={styles.itemText}>FAQs</Text>
            <MaterialCommunityIcons
              name={faqsVisible ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>

          {faqsVisible && (
            <View style={styles.faqList}>
              {faqs.map((faq, index) => (
                <View key={index} style={styles.faqContainer}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  {index < faqs.length - 1 && <Divider style={styles.faqDivider} />}
                </View>
              ))}
            </View>
          )}

          <Divider style={styles.divider} />
          
          <TouchableOpacity
            style={styles.settingsItem}
            onPress={() => setLanguageModalVisible(true)}
          >
            <View style={styles.itemIcon}>
              <MaterialCommunityIcons name="translate" size={24} color="#893571" />
            </View>
            <Text style={styles.itemText}>Language</Text>
            <Text style={styles.selectedLanguage}>{selectedLanguage}</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />
        </View>

        <View style={styles.footer}>
          <Button
            mode="outlined"
            icon="logout"
            style={styles.logoutButton}
            labelStyle={styles.logoutText}
            onPress={() => setLogoutModalVisible(true)}
          >
            Log Out
          </Button>

          <Button
            mode="outlined"
            icon="delete"
            style={styles.deleteButton}
            labelStyle={styles.deleteText}
            onPress={() => setDeleteAccountModalVisible(true)}
          >
            Delete Account
          </Button>
        </View>

        {/* Logout Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={logoutModalVisible}
          onRequestClose={() => setLogoutModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Are you sure you want to log out?</Text>
              <View style={styles.modalActions}>
                <Button
                  onPress={handleLogout}
                  style={styles.modalButton}
                  textColor="white"
                >
                  Yes
                </Button>
                <Button
                  mode="text"
                  onPress={() => setLogoutModalVisible(false)}
                  style={styles.modalButtonCancel}
                  textColor="#673AB7"
                >
                  Cancel
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        {/* Delete Account Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={deleteAccountModalVisible}
          onRequestClose={() => setDeleteAccountModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Delete Account</Text>
              <Text style={styles.modalMessage}>Are you sure you want to delete your account? This action cannot be undone.</Text>
              <View style={styles.modalActions}>
                <Button
                  onPress={handleDeleteAccount}
                  style={[styles.modalButton, styles.deleteModalButton] }
                  textColor="white"
                >
                  Delete
                </Button>
                <Button
                  mode="text"
                  onPress={() => setDeleteAccountModalVisible(false)}
                  style={styles.modalButtonCancel}
                  textColor="#b15f8d"
                >
                  Cancel
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        {/* Language Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={languageModalVisible}
          onRequestClose={() => setLanguageModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Language</Text>
              {languages.map((language, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.languageOption}
                  onPress={() => {
                    setSelectedLanguage(language);
                    setLanguageModalVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.languageText,
                      selectedLanguage === language && styles.languageTextSelected,
                    ]}
                  >
                    {language}
                  </Text>
                </TouchableOpacity>
              ))}
              <Button
                onPress={() => setLanguageModalVisible(false)}
                style={styles.closeModalButton}
              >
                Close
              </Button>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <FooterNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  settingsSection: {
    marginTop: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 4,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    flex: 1, 
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  selectedLanguage: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  faqList: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  faqContainer: {
    marginVertical: 8,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  faqDivider: {
    marginVertical: 8,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 20,
    gap: 10,
  },
  logoutButton: {
    borderWidth: 2,
    borderColor: '#893571',
    backgroundColor: '#893571',
    borderRadius: 10,
  },
  deleteButton: {
    borderWidth: 2,
    borderColor: '#b15f8d',
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  deleteText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b15f8d',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  modalMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    width: '45%',
    backgroundColor: '#893571',
    borderRadius: 10,
  },
  deleteModalButton: {
    backgroundColor: '#b15f8d',
  },
  modalButtonCancel: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    color: '#333',
  },
  languageOption: {
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
  },
  languageTextSelected: {
    color: '#893571',
    fontWeight: 'bold',
  },
  closeModalButton: {
    marginTop: 10,
    alignSelf: 'center',
  }
});

