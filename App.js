// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { tokenCache } from './cache';
import { navigationRef } from './RootNavigation'; // Ensure the path is correct
import { Provider as PaperProvider } from 'react-native-paper';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  );
}

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <NavigationContainer ref={navigationRef}> {/* Set the ref here */}
          <AppNavigator />
        </NavigationContainer>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
