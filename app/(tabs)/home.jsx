import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { useRouter } from "expo-router"

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const upcomingEvents = [
    {
      id: "1",
      title: "School Foundation Day",
      date: "February 14",
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
      date: "July 10",
      color: "#D8E6FF",
      icon: "🤖",
      attendees: [
        require("../../assets/images/profile-1.jpg"),
        require("../../assets/images/profile-2.jpg"),
      ],
    },
  ];

  // Placeholder featured event
  const featuredEvent = {
    title: "Foundation Day 2023",
    date: "February 14, 2023",
    description: "Join us for a day of celebration, fun, and learning!",
    image: require("../../assets/images/foundation.jpg"),
  };

  // Placeholder announcements
  const announcements = [
    {
      id: 1,
      title: "Welcome to EventEase!",
      date: "Feb 1, 2023",
      content: "Check out the new event calendar and notifications system!",
    },
    {
      id: 2,
      title: "RFID Check-in Now Live",
      date: "Jan 28, 2023",
      content: "You can now check in to events using your RFID card.",
    },
  ];

  // Filter events by search
  const filteredEvents = upcomingEvents.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.date.toLowerCase().includes(search.toLowerCase())
  );

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
          <TextInput
            style={{ marginLeft: 10, color: "#222", flex: 1 }}
            placeholder="Search..."
            placeholderTextColor="#9E9E9E"
            value={search}
            onChangeText={setSearch}
          />
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
          {/* Featured Event Banner */}
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF3E0",
              borderRadius: 16,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 25,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
            onPress={() => router.push('/attendance-details?id=1')}
          >
            <Image
              source={featuredEvent.image}
              style={{ width: 80, height: 80, borderRadius: 12, marginRight: 16 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{featuredEvent.title}</Text>
              <Text style={{ color: '#666', fontSize: 13, marginBottom: 4 }}>{featuredEvent.date}</Text>
              <Text style={{ color: '#888', fontSize: 12 }}>{featuredEvent.description}</Text>
            </View>
          </TouchableOpacity>

          {/* Recent Events Section */}
          <View style={{ marginBottom: 25 }}>
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: 15 
            }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recent Events</Text>
              <TouchableOpacity
                onPress={() => router.push('/all-events')}
              >
                <Text style={{ color: "#4A56E2", fontSize: 14 }}>See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 15 }}
            >
              {filteredEvents.map((event) => {
                const totalAttended = 800; // Hardcoded total students attended for demo
                return (
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
                      <Text style={{ fontSize: 12, color: "#666" }}>{totalAttended} students attended</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Recent Announcements Section */}
          <View style={{ marginBottom: 25 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Recent Announcements</Text>
            {announcements.map(a => (
              <View key={a.id} style={{ backgroundColor: '#F5F5F5', borderRadius: 10, padding: 14, marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{a.title}</Text>
                <Text style={{ color: '#888', fontSize: 12, marginBottom: 4 }}>{a.date}</Text>
                <Text style={{ color: '#444', fontSize: 13 }}>{a.content}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

