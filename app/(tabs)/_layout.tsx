import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={() => ({
        tabBarActiveTintColor: "gray",
        headerShown: true,
        headerStyle: { backgroundColor: "gray" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 24,
          letterSpacing: 3,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              size={size}
              color={color}
              name={focused ? "file-tray-full" : "file-tray-full-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="done"
        options={{
          title: "Done",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              size={size}
              color={color}
              name={
                focused
                  ? "checkmark-done-circle-sharp"
                  : "checkmark-done-circle-outline"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
