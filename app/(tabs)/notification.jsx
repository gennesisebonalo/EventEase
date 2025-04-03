import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Notification() {
  const notifications = [
    {
      id: "1",
      title: "New Announcement",
      time: "10:30 AM",
      description: "School Foundation Day Celebration!",
      isRead: false,
    },
  ]

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

              <Text
                style={{
                  color: "#9E9E9E",
                  fontSize: 12,
                  marginBottom: 15,
                }}
              >
                You are invited to invite everyone to the STEM Foundation Day Celebration! This special occasion invites
                everyone to explore the wonders of science, technology, engineering, and mathematics. Join us as we
                celebrate with demonstrations, exhibitions, and hands-on activities!
              </Text>

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
                >
                  <Text style={{ color: "white", fontSize: 12 }}>Join Now</Text>
                </TouchableOpacity>

                <TouchableOpacity>
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

