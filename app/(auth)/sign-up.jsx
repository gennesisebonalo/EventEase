import { useState } from "react"
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import CustomButton from "../../assets/components/CustomButton"

export default function SignUp() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Sign Up text */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Sign Up
        </Text>

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
            <Ionicons name="person-outline" size={20} color="#9E9E9E" />
            <TextInput
              placeholder="Full name"
              value={fullName}
              onChangeText={setFullName}
              style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 10 }}
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
              marginBottom: 15,
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
              placeholder="Confirm password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 10 }}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#9E9E9E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign In button */}
        <CustomButton
          title="SIGN IN"
          containerStyles={{
            backgroundColor: "#4A56E2",
            marginBottom: 20,
          }}
          textStyles={{ color: "white" }}
          handlePress={() => router.push("/(auth)/sign-in")}
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
            <Text>Sign in with Google</Text>
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
            <Text>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Already have an account */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#9E9E9E" }}>Already have an account? </Text>
          <Text style={{ color: "#4A56E2", fontWeight: "bold" }} onPress={() => router.push("/(auth)/sign-in")}>
            Sign In
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

