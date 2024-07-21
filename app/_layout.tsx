import { Stack } from "expo-router";

import TodosProvider from "@/store/todos-context";

export default function RootLayout() {
  return (
    <TodosProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        />
      </Stack>
    </TodosProvider>
  );
}
