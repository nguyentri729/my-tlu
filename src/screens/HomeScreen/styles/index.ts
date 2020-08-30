import { StyleSheet, Dimensions } from "react-native";
const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: width,
    marginTop: 60,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  items: {
    margin: 10,
    width: width / 2.5,
    height: 100,
    alignItems: "center",
    paddingTop: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  icon: {
    width: 64,
    height: 64,
  },
  card: {
    margin: 10,
    width: width - 60,

    alignItems: "center",
    paddingTop: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 10,
  },
  card_header: {
    borderBottomColor: "red",
    height: 40,
    width: "100%",
    backgroundColor: "#00cec9",
    borderRadius: 1,
    alignItems: "center",
  },
  listContent: {
    fontSize: 15,
    color: "#636e72",
    marginBottom: 10,
    fontWeight: "bold",
    borderBottomColor: "#dfe6e9",
    paddingBottom: 3,
    borderBottomWidth: 1,
  },
  card_body: {
    padding: 20,
    height: 130,
  },
});
export default styles;
