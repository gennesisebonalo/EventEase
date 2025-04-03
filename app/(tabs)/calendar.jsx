import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(15) // Default selected date

  // Mock data for calendar events
  const events = [
    {
      id: 1,
      title: "Today's Event",
      time: "09:00 AM",
      description: "Comsopolis Code...",
      isActive: true,
    },
    {
      id: 2,
      title: "Today's Event",
      time: "09:00 AM",
      description: "Comsopolis Code...",
      isActive: false,
    },
    {
      id: 3,
      title: "Today's Event",
      time: "09:00 AM",
      description: "Comsopolis Code...",
      isActive: false,
    },
  ]

  // Calendar data
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const dates = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4A56E2" }}>
      {/* Header */}
      <View style={{ padding: 16, backgroundColor: "#4A56E2" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 20 }}>
          Event Calendar
        </Text>
      </View>

      {/* Content */}
      <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <ScrollView style={{ padding: 16 }}>
          {/* Month selector */}
          <View style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: 20,
          }}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="#666" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>FEBRUARY</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Days of week */}
          <View style={{ 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginBottom: 15,
          }}>
            {days.map((day) => (
              <Text 
                key={day} 
                style={{ 
                  width: 40, 
                  textAlign: "center",
                  color: "#666",
                  fontSize: 12,
                }}
              >
                {day}
              </Text>
            ))}
          </View>

          {/* Calendar grid */}
          <View style={{ 
            flexDirection: "row", 
            flexWrap: "wrap",
            marginBottom: 30,
          }}>
            {dates.map((date) => (
              <TouchableOpacity
                key={date}
                onPress={() => setSelectedDate(date)}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  borderRadius: 20,
                  backgroundColor: selectedDate === date ? "#4A56E2" : "transparent",
                }}
              >
                <Text
                  style={{
                    color: selectedDate === date ? "white" : "black",
                    fontWeight: selectedDate === date ? "bold" : "normal",
                  }}
                >
                  {date}
                </Text>
                {date === 15 && ( // Indicator for events
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: selectedDate === date ? "white" : "#4A56E2",
                      position: "absolute",
                      bottom: 5,
                    }}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Today's Events */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>Today's Event</Text>
            
            {/* Event list */}
            <View style={{ gap: 15 }}>
              {events.map((event) => (
                <View
                  key={event.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F5F5F5",
                    padding: 15,
                    borderRadius: 12,
                    borderLeftWidth: 4,
                    borderLeftColor: event.isActive ? "#4A56E2" : "transparent",
                  }}
                >
                  {/* Time */}
                  <View style={{ marginRight: 15 }}>
                    <Text style={{ fontWeight: "bold" }}>{event.time}</Text>
                  </View>

                  {/* Event details */}
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: "bold" }}>{event.title}</Text>
                    <Text style={{ color: "#666", marginTop: 5 }}>{event.description}</Text>
                  </View>

                  {/* More options */}
                  <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="#666" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

