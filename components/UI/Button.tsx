import { Link } from "expo-router";
import { ExpoRouter } from "expo-router/types/expo-router";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  style: ViewStyle;
  primary?: boolean;
};

export default function Button({
  onPress,
  children,
  style,
  primary,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, pressed && styles.pressed]}
    >
      <View style={[styles.button, primary && styles.primaryButton]}>
        <Text style={[styles.buttonText, primary && styles.primaryText]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    width: "50%",
    alignSelf: "center",
    borderRadius: 12,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
    color: "gray",
  },
  primaryButton: {
    backgroundColor: "gray",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  primaryText: {
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
});
