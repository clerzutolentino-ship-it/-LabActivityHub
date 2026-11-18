
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';

export default function ActivityDetailsScreen({ route }) {
  const { colors } = useTheme();

  const activity = route.params?.activity;

  if (!activity) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>
          No activity selected.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.iconContainer, { backgroundColor: colors.card }]}>
        <Text style={styles.icon}>{activity.icon}</Text>
      </View>

      <Text style={[styles.heading, { color: colors.text }]}>
        {activity.title}
      </Text>

      <Text style={[styles.subtitle, { color: colors.secondaryText }]}>
        Laboratory Activity Details
      </Text>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.label, { color: colors.text }]}>
          Activity Description
        </Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          {activity.description}
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.label, { color: colors.text }]}>
          Activity Information
        </Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          Activity Number: {activity.id}
        </Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          Activity Name: {activity.title}
        </Text>

        <Text style={[styles.description, { color: colors.secondaryText }]}>
          Status: Available
        </Text>
      </View>

      <Text style={[styles.note, { color: colors.secondaryText }]}>
        Select an activity from the Activities screen to view its details.
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 110,
    height: 110,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 55,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
  },
  note: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 19,
  },
});
