import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const eventData = {
  '1': {
    title: 'Foundation Day',
    date: 'March 15, 2023',
    image: require('../assets/images/foundation.jpg'),
    description: 'This is a special day celebrating the foundation of our organization. Join us for fun, food, and festivities!'
  },
  '2': {
    title: 'Zumba',
    date: 'March 20, 2023',
    image: require('../assets/images/zumba.jpg'),
    description: 'Get ready to dance and sweat it out with our Zumba event! All levels welcome.'
  },
  '3': {
    title: 'English Day',
    date: 'March 25, 2023',
    image: require('../assets/images/english.jpg'),
    description: 'Celebrate English language and culture with activities, games, and more.'
  },
};

export default function AttendanceDetails() {
  const { id, checkInTime } = useLocalSearchParams();
  const router = useRouter();
  const event = eventData[id] || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>{'<'} </Text>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Image source={event.image} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      {checkInTime ? (
        <Text style={styles.checkInTime}>Checked in at {checkInTime}</Text>
      ) : null}
      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 22,
    color: '#a993fe',
    fontWeight: 'bold',
  },
  backText: {
    fontSize: 16,
    color: '#a993fe',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 4,
  },
  checkInTime: {
    fontSize: 15,
    color: '#4caf50',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
  },
}); 