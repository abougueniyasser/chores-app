import { View, FlatList, StyleSheet, Text } from "react-native";
import TodoItem from "./TodoItem";

export type TodoType = {
  title: string;
  id: number;
  date: Date;
};

export default function TodoList({ todos }: { todos: TodoType[] }) {
  function renderTodos({ item, index }: { item: TodoType; index: number }) {
    return <TodoItem title={item.title} date={item.date} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 80,
  },
  todoContainer: {
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: "80%",
    alignSelf: "center",
    marginVertical: 5,
  },
});
