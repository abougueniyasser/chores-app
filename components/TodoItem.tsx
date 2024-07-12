import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  title: string;
  date: Date;
};
export default function TodoItem({ title, date }: TodoItemProps) {
  return (
    <View style={styles.todoContainer}>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
