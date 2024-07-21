import { useCallback, useContext, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";

import TodoList, { TodoType } from "../../components/TodoList";
import Button from "../../components/UI/Button";
import { TodosContext } from "@/store/todos-context";

export default function Todos() {
  const todosContext = useContext(TodosContext);

  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setButtonClicked(false);
    }, [])
  );

  function handleOpenFormModal() {
    setButtonClicked(true);
    router.push({
      pathname: "modal",
      params: { action: "add" },
    });
  }

  const content =
    todosContext.todos.length == 0 ? (
      <View style={styles.emptyListContainer}>
        <Text>No TO-DOs in the list. Create one!</Text>
      </View>
    ) : (
      <TodoList todos={todosContext.todos} />
    );
  return (
    <SafeAreaView style={[styles.container, buttonClicked && { opacity: 0.4 }]}>
      {content}
      <Button onPress={handleOpenFormModal} style={styles.button} primary>
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
