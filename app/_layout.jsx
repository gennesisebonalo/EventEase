// app/_layout.js
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "../assets/components/theme-provider" // adjust if needed

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
