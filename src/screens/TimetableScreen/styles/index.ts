import { StyleSheet, Dimensions } from "react-native";
const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  main: {
    alignItems: "center",
  },
  logo: {
    width: width - 100,
  },
  input: {
    height: 50,
    width: width - 100,
    backgroundColor: "#dfe6e9",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    textAlign: "center",
  },
  loginButton: {
    marginTop: 20,
    width: width - 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#00b894",
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    alignContent: "center",
    fontSize: 18,
    paddingTop: 10,
  },
});

export default styles;
