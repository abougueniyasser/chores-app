import { StyleSheet, TextInput, View } from "react-native";

type InputProps = {
  value: string;
  onChange: (text: string) => void;
};
export default function Input({ value, onChange }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="What do you want to do?"
        style={styles.input}
      />
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
