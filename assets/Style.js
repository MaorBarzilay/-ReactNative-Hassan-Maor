import { StyleSheet } from "react-native";

const inputViewSize = 350;
const inputLabelSize = inputViewSize / 2;
const font = "Lora-Regular";

export default StyleSheet.create({
  
  BG: {
    flex: 1,
    backgroundColor: "#52068c",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  gridItem: {
    flex: 1,
    margin: 15,
    height: 170,
  },
  gridContainer: {
    flex: 1,
    borderRadius: 45,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
  },
  titles: {
    fontSize: 27,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    fontFamily: font,
    margin: 5,
  },

  //BG img
  BGImg: {
    height: 190,
    backgroundColor: "#7908cf",
    borderRadius: 45,
  },

  // Product Page
  mainHL: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    fontFamily: font,
    color: "beige",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
  },

  headLines: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: 40,
    color: "#fff",
    fontFamily: font,
  },

  regText: {
    fontSize: 23,
    color: "cornsilk",
    fontFamily: font,
  },
  prodImg: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: "#633974",
    backgroundColor: "white",
  },
  boxFrame: {
    borderWidth: 4,
    borderColor: "#633974",
    borderRadius: 20,
    margin: 5,
    padding: 20,
    flexWrap: "nowrap",
  },

  viewProductImg: {
    alignItems: "center",
  },

  AddToCart: {
    backgroundColor: "#7908cf",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, 
  },

  AddToCartText: {
    color: "black",
    fontSize: 30,
    fontFamily: font,
    marginLeft: 15,
    textShadowColor: "black",
    
    padding: 3,
                    marginLeft: 5,
                    marginTop: 7,
                    textAlign: "left",
  },
  CatproductsTitle: {
    color: "white",
    fontSize: 23,
    fontFamily: font,
    
    textAlign: "center",
    justifyContent: "center",
    margin: 5,
  },

  input: {
    height: 30,
    color: "white",
    width: inputLabelSize,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: inputViewSize * 0.25,
  },
  inputView: {
    marginTop: 5,
    width: inputViewSize,
    justifyContent: "center",
    padding: 3,
    alignSelf: "center",
  },
  textInput: {
    fontFamily: font,
    color: "white",
    fontSize: 18,
    marginLeft: inputViewSize * 0.25,
    marginRight: inputViewSize * 0.25,
  },
  button: {
    marginTop: 20,
    width: 150,
  },
  couponButton: {
    margin: 20,
    borderRadius: 4,
    backgroundColor: "#633974",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  inputError: {
    borderColor: "#ff0000",
  },
  errorMsg: {
    color: "#ff0000",
    marginLeft: inputViewSize * 0.25,
    marginRight: inputViewSize * 0.25,
  },
  enterCouponButton: {
    backgroundColor: "#7908cf",
    padding: 3,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, 
    alignItems: "center",
    justifyContent:"center",
    width: 200,
    height: 45,
  },
  buttonText: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    fontFamily: font,
    elevation: 3, 
    textAlign: "auto",
  },
  deleteBtn: {
    alignSelf: "center",
    height: 140,
    width: 100,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    elevation: 8,
    backgroundColor: "#dc3545",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#dc3545",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
  },
 
  navigateButton: {
    backgroundColor: "#7908cf",
    padding: 3,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3,
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    height: 45,
    marginBottom: 7,
  },
});
