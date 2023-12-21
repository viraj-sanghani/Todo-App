import styles from "../styles";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Card = ({ index, item, removeTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskContent}>{item}</Text>
      <Icon
        style={styles.deleteTaskBtn}
        name="delete"
        onPress={() => removeTask(index)}
      />
    </View>
  );
};

export default Card;
