import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

export default function Home() {
  const upcomingEvents = [
    {
      id: "1",
      title: "School Foundation Day",
      date: "May 15",
      color: "#FFD8D8",
      icon: "🎓",
      attendees: [
        require("../../assets/images/profile-1.jpg"),
        require("../../assets/images/profile-2.jpg"),
      ],
    },
    {
      id: "2",
      title: "AI Primer Lecture",
      date: "May 20",
      color: "#D8E6FF",
      icon: "🤖",
      attendees: [
        require("../../assets/images/profile-1.jpg"),
        require("../../assets/images/profile-2.jpg"),
      ],
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A56E2" }}>
      {/* Header with Search */}
      <View style={{ padding: 16, backgroundColor: "#4A56E2" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 25,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          <Ionicons name="search" size={20} color="#9E9E9E" />
          <Text style={{ marginLeft: 10, color: "#9E9E9E" }}>Search...</Text>
        </View>
      </View>

      {/* Content */}
      <View style={{ 
        flex: 1, 
        backgroundColor: "white", 
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        paddingTop: 20
      }}>
        <ScrollView style={{ padding: 16 }}>
          {/* Upcoming Events Section */}
          <View style={{ marginBottom: 25 }}>
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: 15 
            }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Upcoming Events</Text>
              <TouchableOpacity>
                <Text style={{ color: "#4A56E2", fontSize: 14 }}>See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 15 }}
            >
              {upcomingEvents.map((event) => (
                <TouchableOpacity
                  key={event.id}
                  style={{
                    width: 200,
                    backgroundColor: event.color,
                    borderRadius: 12,
                    padding: 15,
                    justifyContent: "space-between",
                    height: 150,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 24 }}>{event.icon}</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                    >
                      {event.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#666",
                        marginTop: 5,
                      }}
                    >
                      {event.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginRight: 10,
                      }}
                    >
                      {event.attendees.map((attendee, index) => (
                        <Image
                          key={index}
                          source={attendee}
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                            marginLeft: index > 0 ? -8 : 0,
                            borderWidth: 1,
                            borderColor: "white",
                          }}
                        />
                      ))}
                    </View>
                    <Text style={{ fontSize: 12, color: "#666" }}>+5 others</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Invite Friends Section */}
          <View
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: 12,
              padding: 15,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Invite your friends
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#666",
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                Get 50 points for each friend who joins
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#4A56E2",
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  alignSelf: "flex-start",
                }}
              >
                <Text style={{ color: "white", fontSize: 14 }}>Invite</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/images/invite-friends.png")}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

