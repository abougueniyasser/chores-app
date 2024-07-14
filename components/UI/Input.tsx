import { StyleSheet, TextInput, View } from "react-native";

export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="What do you want to do?" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    margin: 8,
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 2,
    fontSize: 14,
    fontWeight: "300",
    letterSpacing: 1,
  },
});
