import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AllEvents() {
  const router = useRouter();
  const allEvents = [
    {
      id: "1",
      title: "School Foundation Day",
      date: "February 14",
      color: "#FFD8D8",
      icon: "🎓",
      attendees: [
        require("../assets/images/profile-1.jpg"),
        require("../assets/images/profile-2.jpg"),
      ],
    },
    {
      id: "2",
      title: "AI Primer Lecture",
      date: "July 10",
      color: "#D8E6FF",
      icon: "🤖",
      attendees: [
        require("../assets/images/profile-1.jpg"),
        require("../assets/images/profile-2.jpg"),
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A56E2" }}>
      {/* Header */}
      <View style={{ padding: 16, backgroundColor: "#4A56E2", flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 10 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>All Events</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 20 }}>
        <ScrollView style={{ padding: 16 }}>
          {allEvents.map((event) => (
            <View
              key={event.id}
              style={{
                backgroundColor: event.color,
                borderRadius: 12,
                padding: 15,
                marginBottom: 18,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ marginRight: 16, alignItems: 'center' }}>
                <Text style={{ fontSize: 32 }}>{event.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{event.title}</Text>
                <Text style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{event.date}</Text>
                <Text style={{ fontSize: 12, color: "#666", marginTop: 2 }}>800 students attended</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
} 