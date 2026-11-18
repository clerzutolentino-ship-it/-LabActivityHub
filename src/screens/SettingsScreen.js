
import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.heading, { color: colors.text }]}>
        Settings ⚙️
      </Text>

      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Customize your application preferences.
      </Text>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.settingInfo}>
          <Text style={[styles.settingTitle, { color: colors.text }]}>
            Appearance
          </Text>

          <Text style={[styles.description, { color: colors.secondaryText }]}>
            {isDarkMode ? 'Dark Mode is enabled' : 'Light Mode is enabled'}
          </Text>
        </View>

        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{
            false: '#BDBDBD',
            true: colors.primary,
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>
          Current Theme
        </Text>

        <Text style={[styles.themeValue, { color: colors.primary }]}>
          {isDarkMode ? '🌙 Dark Theme' : '☀️ Light Theme'}
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>
          About LabActivityHub
        </Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          LabActivityHub is a master compilation application for organizing
          and accessing laboratory activities.
        </Text>

        <Text style={[styles.version, { color: colors.secondaryText }]}>
          Version 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 35,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    lineHeight: 21,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  description: {
    fontSize: 13,
    lineHeight: 20,
  },
  themeValue: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  version: {
    fontSize: 12,
    marginTop: 12,
  },
});
