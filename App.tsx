import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

type GoalEntry = {
  key: string;
  value: string;
};

export default function App() {
  const [courseGoals, setCourseGoals]: [GoalEntry[], Function] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal: string): void => {
    setCourseGoals([
      { key: Math.random().toString(), value: goal },
      ...courseGoals,
    ]);
    setIsAddMode(false);
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalId: string) => {
    Alert.alert("Remove goal", `Do you want to remove this goal?`, [
      {
        text: "Yes",
        onPress: () =>
          setCourseGoals(courseGoals.filter((goal) => goal.key !== goalId)),
      },
      {
        text: "Cancel",
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
        visible={isAddMode}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
      <View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flex: 1,
  },
});
