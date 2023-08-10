import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contextImc:{
    flex:1,
    marginTop:20,
    paddingTop:15,
    alignItems:"center",
    width:"100%",
  },
  resultImc:{
    flex:1,
    marginTop:15,
    paddingTop:60,
    borderRadius:50,
    alignItems:"center",
    width:"100%",
  },
  numberIMC:{
    fontSize:48,
    color:"#FF0043",
    fontWeight:"bold",
  },
  information:{
    fontSize:18,
    color:"#FF0043",
    fontWeight:"bold"
  },
  boxShareButton:{
    width:"100%",
    alignItems:"center",
    marginBottom:10
  },
  share:{
    backgroundColor:"#1877F2",
    borderRadius:50,
    paddingBottom:5,
    paddingTop:5,
    alignItems:"center",
    marginHorizontal:147,
  },
  shareText:{
    color:"#FFF",
    paddingHorizontal:30,
    fontWeight:"bold",
    alignItems:"center",
  }
});

export default styles
