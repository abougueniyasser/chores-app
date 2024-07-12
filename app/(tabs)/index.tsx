import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";

import TodoList, { TodoType } from "../../components/TodoList";
import Button from "../../components/UI/Button";

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

  if (todosList.length == 0) {
    return (
      <View style={styles.emptyListContainer}>
        <Text>No TO-DOs in the list. Create one!</Text>
      </View>
    );
  }

  function handleAddTodo() {
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={todosList} />
      <Button onPress={handleAddTodo}>Add Todo</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  emptyListContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
