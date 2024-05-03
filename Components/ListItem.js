import { Pressable, View, Text, StyleSheet } from "react-native";

function ListItem({ title, color , onPress }) {
  console.log(title);
  return (
    <View  style={[styles.listItemContainer, { backgroundColor: color }]}>
      <Pressable style={{ flex: 1 }} android_ripple={{ color: "grey" }} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.listText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    margin: 16,
    elevation: 4,
    height: 150,
    overflow: "hidden",
    shadowOpacity : 0.25,
    shadowRadius : 4,
    shadowOffset : {width : 4, height : 4},
    borderColor : 'white',
    overflow : 'hidden',
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listText : {
    fontWeight : 'bold',
    fontSize : 18
  }
});
