import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

export default function Button({ onPress, children }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 100,
  },
  button: {
    backgroundColor: "gray",
    paddingVertical: 18,
    width: "50%",
    alignSelf: "center",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
