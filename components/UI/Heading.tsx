import { StyleSheet, Text, View } from "react-native";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    backgroundColor: "gray",
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  heading: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 38,
    letterSpacing: 2,
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    textAlign: "center",
  },
});
