import { StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import { TodosContext } from "@/store/todos-context";

type FormProps = {
  onCloseModal: () => void;
};

export default function Form({ onCloseModal }: FormProps) {
  const [todo, setTodo] = useState("");
  const todosContext = useContext(TodosContext);

  function handleTodoChange(text: string) {
    setTodo(text);
  }

  function handleAddTodo() {
    todosContext.addTodo({
      title: todo,
      id: Math.random(),
      date: new Date(),
    });

    onCloseModal();
  }

  return (
    <View style={styles.form}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>

      <Input value={todo} onChange={handleTodoChange} />

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={onCloseModal} style={styles.button}>
            Cancel
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleAddTodo} style={styles.button} primary>
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
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
