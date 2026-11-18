
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
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

export default function ActivitiesScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.heading, { color: colors.text }]}>
        My Laboratory Activities
      </Text>

      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Explore and manage your laboratory activities.
      </Text>

      {activities.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.card, { backgroundColor: colors.card }]}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ActivityDetails', {
              activity: item,
            })
          }
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{item.icon}</Text>
          </View>

          <View style={styles.cardInfo}>
            <Text style={[styles.title, { color: colors.text }]}>
              {item.title}
            </Text>

            <Text style={[styles.description, { color: colors.secondaryText }]}>
              {item.description}
            </Text>
          </View>

          <Text style={[styles.arrow, { color: colors.primary }]}>
            →
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    lineHeight: 21,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    gap: 14,
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 14,
    backgroundColor: '#F0EBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 27,
  },
  cardInfo: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
