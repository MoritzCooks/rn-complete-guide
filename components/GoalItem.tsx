import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

export type GoalItemProps = {
  title: string;
  id: string
  onDelete: (id: string) => void;
};

export default function GoalItem(props: GoalItemProps) {
  return (
    <View style={styles.goalListItemWrapper}>
      <TouchableOpacity onPress={() => props.onDelete(props.id)} activeOpacity={0.5}>
        <Text style={styles.goalListItem}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListItemWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  goalListItem: {
    margin: 5,
    padding: 5,
    backgroundColor: "#f1f1f1",
  },
});
