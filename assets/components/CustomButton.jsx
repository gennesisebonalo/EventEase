import { Text, TouchableOpacity, StyleSheet } from "react-native"

export default function CustomButton({ title, handlePress, containerStyles, textStyles }) {
  return (
    <TouchableOpacity style={[styles.button, containerStyles]} onPress={handlePress}>
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A56E2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
})

