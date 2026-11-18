
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';

const activities = [
  {
    id: 1,
    title: 'Activity 1',
    description: 'First laboratory activity',
    icon: '📋',
  },
  {
    id: 2,
    title: 'Activity 2',
    description: 'Monitor Wi-Fi, Cellular, and Offline states',
    icon: '📶',
  },
  {
    id: 3,
    title: 'Activity 3',
    description: 'Network Diagnostic Dashboard',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Activity 4',
    description: 'Local Mesh Chat',
    icon: '💬',
  },
  {
    id: 5,
    title: 'Activity 5',
    description: 'Custom Map with Geofencing Tracker',
    icon: '🗺️',
  },
];

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  const [search, setSearch] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    setWelcomeMessage('Welcome to your laboratory activity hub!');
  }, []);

  const filteredActivities = activities.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeText}>
          <Text style={[styles.heading, { color: colors.text }]}>
            Hello, Student! 👋
          </Text>

          <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
            {welcomeMessage}
          </Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: colors.card }]}>
          <Text style={styles.statIcon}>📚</Text>
          <Text style={[styles.statNumber, { color: colors.text }]}>
            {activities.length}
          </Text>
          <Text style={[styles.statLabel, { color: colors.secondaryText }]}>
            Total Activities
          </Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: colors.card }]}>
          <Text style={styles.statIcon}>🎓</Text>
          <Text style={[styles.statNumber, { color: colors.text }]}>
            1
          </Text>
          <Text style={[styles.statLabel, { color: colors.secondaryText }]}>
            Student Portal
          </Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        Quick Navigation
      </Text>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('Activities')}
        >
          <Text style={styles.navButtonText}>📚 Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navButtonText}>👤 Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.navButtonText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.activityHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          My Laboratory Activities
        </Text>
      </View>

      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Search activities..."
        placeholderTextColor={colors.secondaryText}
        value={search}
        onChangeText={setSearch}
      />

      {filteredActivities.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.activityCard,
            { backgroundColor: colors.card },
          ]}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ActivityDetails', { activity: item })
          }
        >
          <Text style={styles.activityIcon}>{item.icon}</Text>

          <View style={styles.activityInfo}>
            <Text style={[styles.activityTitle, { color: colors.text }]}>
              {item.title}
            </Text>

            <Text
              style={[
                styles.activityDescription,
                { color: colors.secondaryText },
              ]}
            >
              {item.description}
            </Text>
          </View>

          <Text style={[styles.arrow, { color: colors.primary }]}>
            →
          </Text>
        </TouchableOpacity>
      ))}

      {filteredActivities.length === 0 && (
        <Text style={[styles.emptyText, { color: colors.secondaryText }]}>
          No activities found.
        </Text>
      )}

      <Text style={[styles.footer, { color: colors.secondaryText }]}>
        LabActivityHub • Learn and Explore
      </Text>
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
  welcomeSection: {
    marginBottom: 22,
  },
  welcomeText: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    minWidth: 130,
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  navigationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
  },
  navButton: {
    flexGrow: 1,
    flexBasis: 100,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  activityHeader: {
    marginBottom: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    marginBottom: 15,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 13,
    gap: 12,
  },
  activityIcon: {
    fontSize: 32,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  arrow: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    padding: 20,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
});
