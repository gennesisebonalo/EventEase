import { useState } from "react"
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import CustomButton from "../../assets/components/CustomButton"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Logo */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#4A56E2",
              marginTop: 10,
            }}
          >
            EVENTEASE
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 5,
            }}
          >
            Sign In
          </Text>
        </View>

        {/* Input fields */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#E0E0E0",
              borderRadius: 8,
              paddingHorizontal: 10,
              marginBottom: 15,
            }}
          >
            <Ionicons name="mail-outline" size={20} color="#9E9E9E" />
            <TextInput
              placeholder="abc@example.com"
              value={email}
              onChangeText={setEmail}
              style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 10 }}
              keyboardType="email-address"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#E0E0E0",
              borderRadius: 8,
              paddingHorizontal: 10,
            }}
          >
            <Ionicons name="lock-closed-outline" size={20} color="#9E9E9E" />
            <TextInput
              placeholder="Your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 10 }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot password */}
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginBottom: 20 }}
          onPress={() => router.push("/(auth)/forget-password")}
        >
          <Text style={{ color: "#9E9E9E" }}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In button */}
        <CustomButton
          title="SIGN IN"
          containerStyles={{
            backgroundColor: "#4A56E2",
            marginBottom: 20,
          }}
          textStyles={{ color: "white" }}
          handlePress={() => router.replace("/(tabs)/home")}
        />

        {/* OR divider */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0" }} />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: "#9E9E9E" }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0" }} />
        </View>

        {/* Social login buttons */}
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 8,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#E0E0E0",
            }}
            onPress={() => {
              // Add Google sign in logic here
              router.replace("/(tabs)/home")
            }}
          >
            <Image source={require("@/assets/images/google.png")} style={{ width: 24, height: 24, marginRight: 10 }} />
            <Text>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#E0E0E0",
            }}
            onPress={() => {
              // Add Facebook sign in logic here
              router.replace("/(tabs)/home")
            }}
          >
            <Image
              source={require("@/assets/images/facebook.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Don't have an account */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#9E9E9E" }}>Don't have an account? </Text>
          <Text style={{ color: "#4A56E2", fontWeight: "bold" }} onPress={() => router.push("/(auth)/sign-up")}>
            Sign Up
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

