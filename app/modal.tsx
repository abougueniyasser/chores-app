import { StyleSheet, Text, TextInput, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

import Button from "@/components/UI/Button";

type ModalProps = {};

export default function Modal() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { action } = params;

  function closeModal() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{action} Chore</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Label */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Title</Text>
          </View>
          {/* Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="What do you want to do?"
              style={styles.input}
            />
          </View>
          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button onPress={closeModal} style={styles.button}>
                Cancel
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={closeModal} style={styles.button} primary>
                Submit
              </Button>
            </View>
          </View>
        </View>
        {/* End Form */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
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
  form: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
  },
  button: {
    marginVertical: 20,
  },
  titleContainer: {
    margin: 8,
  },
  title: {
    fontSize: 24,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontWeight: "300",
  },
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
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
