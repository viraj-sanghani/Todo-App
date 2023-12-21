import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Card from "./components/Card";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    try {
      const tasks = await AsyncStorage.getItem("tasks");
      if (tasks !== null) {
        const jsonContent = JSON.parse(tasks);
        setTodoList(jsonContent || []);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading todo list:", error);
    }
  };

  const addTask = async () => {
    if (task.trim() !== "") {
      const updatedTodoList = [...todoList, task];
      setTask("");
      setTodoList(updatedTodoList);
      await saveTodoList(updatedTodoList);
    }
  };

  const removeTask = async (index) => {
    if (processing) return;
    setProcessing(true);
    const updatedTodoList = todoList.filter((ele, i) => i !== index);
    setTodoList(updatedTodoList);
    await saveTodoList(updatedTodoList);
    setProcessing(false);
  };

  const handleConfirm = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete all?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: removeAll },
      ],
      { cancelable: false }
    );
  };

  const removeAll = async () => {
    setTodoList([]);
    await saveTodoList([]);
  };

  const saveTodoList = async (list) => {
    try {
      const jsonString = JSON.stringify(list);

      await AsyncStorage.setItem("tasks", jsonString);
    } catch (error) {
      console.error("Error saving todo list:", error);
    }
  };

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" height="100%" />
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today's Tasks</Text>
        <Text style={styles.headerClearBtn} onPress={handleConfirm}>
          Clear
        </Text>
      </View>

      <FlatList
        style={styles.taskWrap}
        data={todoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card index={index} item={item} removeTask={removeTask} />
        )}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.footer}
      >
        <TextInput
          value={task}
          blurOnSubmit={false}
          onChangeText={(text) => setTask(text)}
          onSubmitEditing={addTask}
          placeholder="Write a task"
          style={styles.taskInput}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Icon style={styles.addTaskButton} name="add" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
