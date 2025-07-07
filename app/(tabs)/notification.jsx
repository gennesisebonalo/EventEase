import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

async function setAttendanceStatus(eventId, statusObj) {
  try {
    const existing = await AsyncStorage.getItem('attendanceStatus');
    let attendanceStatus = existing ? JSON.parse(existing) : {};
    attendanceStatus[eventId] = statusObj;
    await AsyncStorage.setItem('attendanceStatus', JSON.stringify(attendanceStatus));
  } catch (e) {
    // handle error
  }
}

export default function Notification() {
  const router = useRouter();
  const notifications = [
    {
      id: "1",
      title: "Foundation Day",
      time: "March 15, 2023",
      description: "This is a special day celebrating the foundation of our organization. Join us for fun, food, and festivities!",
      isRead: false,
    },
    {
      id: "2",
      title: "Zumba",
      time: "March 20, 2023",
      description: "Get ready to dance and sweat it out with our Zumba event! All levels welcome.",
      isRead: false,
    },
    {
      id: "3",
      title: "English Day",
      time: "March 25, 2023",
      description: "Celebrate English language and culture with activities, games, and more.",
      isRead: false,
    },
  ]

  const handleDecline = async (id) => {
    await setAttendanceStatus(id, { status: 'absent' });
    Alert.alert('Absent', 'You are marked as absent for this event.');
  };

  const handleJoinNow = async (id) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    await setAttendanceStatus(id, { status: 'checkedIn', checkedInTime: timeString });
    router.push('/rfid-tap');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A56E2" }}>
      {/* Header */}
      <View style={{ padding: 16, backgroundColor: "#4A56E2" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 20 }}>
          Notification
        </Text>
      </View>

      {/* Content */}
      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <ScrollView style={{ padding: 16 }}>
          {/* Notifications list */}
          {notifications.map((notification) => (
            <View
              key={notification.id}
              style={{
                backgroundColor: notification.isRead ? "white" : "#F5F5F5",
                borderRadius: 12,
                padding: 15,
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Image
                  source={require("@/assets/images/notification-icon.png")}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold" }}>{notification.title}</Text>
                  <Text style={{ fontSize: 12, color: "#9E9E9E" }}>{notification.time}</Text>
                </View>
              </View>

              <Text style={{ marginBottom: 15 }}>{notification.description}</Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#4A56E2",
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    alignSelf: "flex-start",
                  }}
                  onPress={() => handleJoinNow(notification.id)}
                >
                  <Text style={{ color: "white", fontSize: 12 }}>Join Now</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleDecline(notification.id)}>
                  <Text style={{ color: "#9E9E9E", fontSize: 12 }}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

