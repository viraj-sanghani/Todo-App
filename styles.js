import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#f1f5f9",
    flexDirection: "column",
    rowGap: 10,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  headerClearBtn: {
    fontSize: 15,
    fontWeight: "700",
  },
  taskWrap: {},
  taskItem: {
    backgroundColor: "#fff",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  taskContent: {
    fontSize: 16,
    fontWeight: "600",
  },
  deleteTaskBtn: {
    fontSize: 25,
    color: "#5f33e1",
  },
  footer: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    flexDirection: "row",
    gap: 15,
  },
  taskInput: {
    flexGrow: 1,
    height: 55,
    width: 200,
    backgroundColor: "#f1f5f9",
    fontSize: 16,
    fontWeight: "700",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f33e1",
    color: "#fff",
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  addTaskButton: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },
});

export default styles;
