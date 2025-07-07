import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const router = useRouter();
  // Restore original profile design, no absent events section
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A56E2" }}>
      {/* Header */}
      <View style={{
        padding: 16,
        backgroundColor: "#4A56E2",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Profile
        </Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <ScrollView style={{ padding: 16 }}>
          {/* Profile Header */}
          <View style={{ alignItems: "center", marginTop: 20, marginBottom: 30 }}>
            <View style={{ position: 'relative', marginBottom: 10 }}>
              <Image
                source={require("../../assets/images/profile-pic.png")}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Arnel Demotor</Text>
            <Text style={{ color: "#666", fontSize: 12 }}>College</Text>
            <Text style={{ color: "#666", fontSize: 12 }}>BSIT 3</Text>
          </View>

          {/* Profile Actions */}
          <View style={{
            flexDirection: 'row',
            gap: 10,
            marginBottom: 25,
            paddingHorizontal: 20
          }}>
            <TouchableOpacity style={{
              flex: 1,
              backgroundColor: '#F5F5F5',
              padding: 12,
              borderRadius: 8,
              alignItems: 'center'
            }}>
              <Text style={{ color: '#4A56E2', fontWeight: 'bold' }}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flex: 1,
              backgroundColor: '#4A56E2',
              padding: 12,
              borderRadius: 8,
              alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Share Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Contact Information */}
          <View style={{ marginBottom: 30 }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20
            }}>
              <View style={{
                width: 40,
                height: 40,
                backgroundColor: '#F5F5F5',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15
              }}>
                <Ionicons name="mail-outline" size={20} color="#666" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#666' }}>arnel.demotor@gmail.com</Text>
                <Text style={{ fontSize: 12, color: '#999' }}>Emails sent to this address will be received</Text>
                <Text style={{ fontSize: 12, color: '#4A56E2' }}>Primary Email</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="pencil-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{
                width: 40,
                height: 40,
                backgroundColor: '#F5F5F5',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15
              }}>
                <Ionicons name="phone-portrait-outline" size={20} color="#666" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#666' }}>(012)-375-0424</Text>
                <Text style={{ fontSize: 12, color: '#999' }}>Text messages sent to this number will be received</Text>
                <Text style={{ fontSize: 12, color: '#666' }}>Phone Number</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="pencil-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Event History */}
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>Event History</Text>
            <View style={{ gap: 15 }}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("../../assets/images/event1.png")}
                  style={{ width: 60, height: 60, borderRadius: 8, marginRight: 15 }}
                />
                <View>
                  <Text style={{ fontSize: 14, color: '#666' }}>Wed, Dec 22, 5:00 PM</Text>
                  <Text style={{ fontSize: 14 }}>The future of work is now</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("../../assets/images/event2.png")}
                  style={{ width: 60, height: 60, borderRadius: 8, marginRight: 15 }}
                />
                <View>
                  <Text style={{ fontSize: 14, color: '#666' }}>Fri, Dec 24, 1:00 PM</Text>
                  <Text style={{ fontSize: 14 }}>New product launch</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require("../../assets/images/event3.png")}
                  style={{ width: 60, height: 60, borderRadius: 8, marginRight: 15 }}
                />
                <View>
                  <Text style={{ fontSize: 14, color: '#666' }}>Thu, Dec 30, 4:00 PM</Text>
                  <Text style={{ fontSize: 14 }}>Tech Trends for 2023</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 30,
            marginBottom: 20,
            paddingHorizontal: 20
          }}>
            <TouchableOpacity
              onPress={() => router.push('/attendance')}
              style={{
                flex: 1,
                backgroundColor: '#4A56E2',
                padding: 12,
                borderRadius: 8,
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Attendance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#F5F5F5',
                padding: 12,
                borderRadius: 8,
                alignItems: 'center'
              }}
              onPress={async () => {
                await AsyncStorage.clear();
                router.replace('/sign-in');
              }}
            >
              <Text style={{ color: '#666', fontWeight: 'bold' }}>Log out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
