import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const events = [
  {
    id: '1',
    title: 'Foundation Day',
    date: 'March 15, 2023',
    image: require('../assets/images/foundation.jpg'),
    description: 'Details about Foundation Day.'
  },
  {
    id: '2',
    title: 'Zumba',
    date: 'March 20, 2023',
    image: require('../assets/images/zumba.jpg'),
    description: 'Details about Zumba.'
  },
  {
    id: '3',
    title: 'English Day',
    date: 'March 25, 2023',
    image: require('../assets/images/english.jpg'),
    description: 'Details about English Day.'
  },
];

export default function Attendance() {
  const router = useRouter();
  const [attendanceStatus, setAttendanceStatus] = useState({});

  useEffect(() => {
    const fetchAttendanceStatus = async () => {
      try {
        const stored = await AsyncStorage.getItem('attendanceStatus');
        if (stored) {
          setAttendanceStatus(JSON.parse(stored));
        }
      } catch (e) {
        // handle error
      }
    };
    fetchAttendanceStatus();
  }, []);

  const attendedCount = Object.values(attendanceStatus).filter(s => s.status === 'checkedIn').length;
  const totalCount = events.length;
  const progress = attendedCount / totalCount;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Attendance</Text>
      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>Attendance Completion</Text>
        <Text style={styles.progressPercent}>{Math.round(progress * 100)}%</Text>
      </View>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.statsText}>You've attended {attendedCount} of {totalCount} events</Text>
      <ScrollView style={{ marginTop: 16 }}>
        {events.map(event => {
          const status = attendanceStatus[event.id];
          return (
            <View key={event.id} style={styles.eventCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
                {status && status.status === 'checkedIn' && (
                  <Text style={styles.checkInTime}>Checked in at {status.checkedInTime}</Text>
                )}
                {status && status.status === 'absent' && (
                  <Text style={styles.absentMark}>Absent</Text>
                )}
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => router.push({ pathname: '/attendance-details', params: { id: event.id } })}
                >
                  <Text style={styles.detailsButtonText}>View Details</Text>
                  <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
              </View>
              <Image source={event.image} style={styles.eventImage} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 15,
    fontWeight: '500',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#a993fe',
    borderRadius: 4,
  },
  statsText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  eventDate: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  checkInTime: {
    fontSize: 13,
    color: '#4caf50',
    marginBottom: 4,
  },
  absentMark: {
    fontSize: 13,
    color: '#e57373',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a993fe',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 8,
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 16,
  },
});
