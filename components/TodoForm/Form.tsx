import { StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";

type FormProps = {
  onCloseModal: () => void;
};

export default function Form({ onCloseModal }: FormProps) {
  return (
    <View style={styles.form}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>

      <Input />

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={onCloseModal} style={styles.button}>
            Cancel
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onCloseModal} style={styles.button} primary>
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
