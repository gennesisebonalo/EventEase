import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function RFIDTap() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>{'<'} </Text>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>RFID Tapping</Text>
      <Text style={styles.subtitle}>Please tap your RFID card to check in.</Text>
      {/* TODO: Integrate RFID hardware logic here */}
      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderText}>[RFID Hardware Integration Placeholder]</Text>
      </View>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 32,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
  },
  placeholderBox: {
    marginTop: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: '#a993fe',
    borderRadius: 12,
    backgroundColor: '#f3f0ff',
  },
  placeholderText: {
    color: '#a993fe',
    fontSize: 16,
    textAlign: 'center',
  },
}); 