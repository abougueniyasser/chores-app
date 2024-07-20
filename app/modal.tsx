import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

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
      <Pressable
        onPress={handleCloseModal}
        style={({ pressed }) => pressed && { opacity: 0 }}
      >
        <View style={{ height: 400 }}></View>
      </Pressable>
      <View style={{ flex: 1 }}>
        <Heading>{action} Chore</Heading>
        <Form onCloseModal={handleCloseModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
