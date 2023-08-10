import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext:{
    flex:1,
    backgroundColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:30,
  },

  form:{
    width:"100%",
  },

  formLabel:{
    color:"#000",
    fontSize:18,
    paddingLeft:20,
  },

  input:{
    width:"90%",
    borderRadius:50,
    backgroundColor:"#f6f6f6",
    height:40,
    margin:12,
    paddingLeft:10
  },

  textButtonCalculator:{
    fontSize:20,
    color:"#ffffff",
  },

  buttonCalculator:{
    backgroundColor:"#FF0043",
    borderRadius:50,
    alignItems:"center",
    width:"90%",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    marginRight:12,
    marginTop:30
  },

  errorMessage:{
    fontSize:12,
    color:"red",
    fontWeight:"bold",
    paddingLeft:20,
  },

  result:{
    width:"100%",
    height:"50%"
  },

  listImcs:{
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40
  },

  resultImcItem:{
    fontSize:24,
    color:"red",
    height:50,
    width:"100%",
    paddingRight:20
  },

  textResultItem:{
    fontSize:16,
    color:"red",
  }
});


export default styles
