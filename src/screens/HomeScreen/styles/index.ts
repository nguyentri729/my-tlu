import { StyleSheet, Dimensions } from "react-native";
const width = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: width,
    marginTop: 10,
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
  profile_box: {
    width: width - 50,
    height: 100,
    margin: 25,
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profile_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  profile_name: {
    fontSize: 20,
    marginBottom: 5,
    color: '#3498db'
  },
  profile_code: {
    color: '#3498db'
  },
  btn_logout: {
    marginTop: 10,
    backgroundColor: '#40739e',
    alignItems: "center",
    color: "white",
    borderRadius: 3
  }
});
export default styles;
