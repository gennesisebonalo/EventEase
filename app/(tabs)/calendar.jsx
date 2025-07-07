import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

function formatDate(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function Calendar() {
  // Events with date field
  const events = [
    {
      id: 1,
      title: "Foundation Day",
      time: "09:00 AM",
      description: "School Foundation Day Celebration!",
      date: "2023-02-14",
    },
    {
      id: 2,
      title: "Zumba",
      time: "10:00 AM",
      description: "Get ready to dance and sweat it out with our Zumba event!",
      date: "2023-03-20",
    },
    {
      id: 3,
      title: "English Day",
      time: "01:00 PM",
      description: "Celebrate English language and culture with activities, games, and more.",
      date: "2023-03-25",
    },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // State for current month/year
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(2); // 2 = February

  // Get number of days in month
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const numDays = getDaysInMonth(currentYear, currentMonth);
  const dates = Array.from({ length: numDays }, (_, i) => i + 1);

  // Default selected date: today if in current month, else 1st
  const defaultSelected = (today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth)
    ? today.getDate() : 1;
  const [selectedDate, setSelectedDate] = useState(defaultSelected);

  // Update selected date if month changes
  function handleMonthChange(next) {
    let newMonth = currentMonth + (next ? 1 : -1);
    let newYear = currentYear;
    if (newMonth < 1) {
      newMonth = 12;
      newYear--;
    } else if (newMonth > 12) {
      newMonth = 1;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(1);
  }

  // Get events for selected date
  const selectedDateString = formatDate(currentYear, currentMonth, selectedDate);
  const eventsForSelectedDate = events.filter(e => e.date === selectedDateString);

  // Dates with events in current month
  const eventDates = events
    .filter(e => e.date.startsWith(`${currentYear}-${String(currentMonth).padStart(2, "0")}`))
    .map(e => Number(e.date.split("-")[2]));

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
            <TouchableOpacity onPress={() => handleMonthChange(false)}>
              <Ionicons name="chevron-back" size={24} color="#666" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{monthNames[currentMonth - 1].toUpperCase()} {currentYear}</Text>
            <TouchableOpacity onPress={() => handleMonthChange(true)}>
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
                {eventDates.includes(date) && (
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

          {/* Events for selected date */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
              {eventsForSelectedDate.length > 0 ? "Events" : "No Events"}
            </Text>
            <View style={{ gap: 15 }}>
              {eventsForSelectedDate.length > 0 ? (
                eventsForSelectedDate.map((event) => (
                  <View
                    key={event.id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#F5F5F5",
                      padding: 15,
                      borderRadius: 12,
                      borderLeftWidth: 4,
                      borderLeftColor: "#4A56E2",
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
                  </View>
                ))
              ) : (
                <Text style={{ color: "#888" }}>No events for this date.</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

