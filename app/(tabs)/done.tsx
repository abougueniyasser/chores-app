import { StyleSheet, Text, View } from "react-native";

export default function Done() {
  return (
    <View style={styles.container}>
      <Text>No TO-DOs done yet. Consider completing some today :D !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
