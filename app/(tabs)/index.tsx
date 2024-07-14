import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import TodoList, { TodoType } from "../../components/TodoList";
import Button from "../../components/UI/Button";
import { useRouter } from "expo-router";

const TODOS: TodoType[] = [
  {
    title: "Make breakfast.",
    id: Math.random(),
    date: new Date(),
  },
  {
    title: "Do some chess puzzels.",
    id: Math.random(),
    date: new Date(),
  },
  {
    title: "Get some coding done.",
    id: Math.random(),
    date: new Date(),
  },
];

export default function Todos() {
  const [todosList, setTodosList] = useState(TODOS);
  const router = useRouter();

  if (todosList.length == 0) {
    return (
      <View style={styles.emptyListContainer}>
        <Text>No TO-DOs in the list. Create one!</Text>
      </View>
    );
  }

  function handleAddTodo() {
    router.push({ pathname: "modal", params: { action: "add" } });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={todosList} />
      <Button onPress={handleAddTodo} style={styles.button} primary>
        Add Todo
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 80,
  },
});
