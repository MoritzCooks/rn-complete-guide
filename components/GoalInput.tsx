import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export type GoalInputProps = {
  onAddGoal: (goal: string) => void;
  onCancelGoal: () => void;
  visible: boolean;
};

export default function GoalInput(props: GoalInputProps) {
  const [enteredGoal, setEnteredGoal] = useState("");

  

  const goalInputHandler = (enteredText: string): void =>
    setEnteredGoal(enteredText);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Aufgabe eingeben..."
          style={styles.input}
          onChangeText={(text) => goalInputHandler(text)}
          value={enteredGoal}
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button title="CANCEL" color={"red"} onPress={props.onCancelGoal} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                props.onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
