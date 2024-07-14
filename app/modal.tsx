import { StyleSheet, Text, TextInput, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Heading from "@/components/UI/Heading";
import Form from "@/components/TodoForm/Form";

type ModalProps = {};

export default function Modal() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { action } = params;

  function handleCloseModal() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Heading>{action} Chore</Heading>
      <Form onCloseModal={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
