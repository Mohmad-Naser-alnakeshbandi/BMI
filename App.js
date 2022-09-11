import react, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function App() {
  const [kg, setKg] = useState();
  const [cm, setCm] = useState();
  const [bmi, setBmi] = useState();
  const [bmiresponse, setBmiresponse] = useState();
  const calc = ()=>{

      let result = Math.round(kg / Math.pow((cm/100),2));
      if(isNaN(result)){
        setBmi(" there is no result");
        Alert.alert(" 😥 Something went wrong");
      }
      if(result <18.5){
        setBmi( result);
        setBmiresponse(" You are below the normal weight 👻")
      }
      if(result >18.5 && result <25){
        setBmi( result);
        setBmiresponse("You has a normal weight 😎")
      }
      if(result >25 && result <30){
        setBmi( result);
        setBmiresponse("it's is Overweight 😡")
      }
      if(result >30 && result <35){
        setBmi( result);
        setBmiresponse("it's is | Obesity 🤬")
      } 
      if(result >35 && result <40){
        setBmi( result);
        setBmiresponse("it's is || Obesity 🦍")
      } 
      if(result >= 40){
        setBmi( result);
        setBmiresponse("it's is ||| Obesity 🐘")
      } 
      
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>BMI Calculator 😎</Text>
      </View>
      <View style={styles.main}>
        <Input
          style={styles.main_input}
          placeholder="Weight in Kg"
          type="text"
          keyboardType="numeric"
          onChangeText={(val) => setKg(val)}
        />
        <Input
          style={styles.main_input}
          placeholder="Height in cm"
          type="text"
          keyboardType="numeric"
          onChangeText={(val) => setCm(val)}
        />
        <Button title={"Calcuate"} containerStyle={styles.main_button}  onPress={calc}/>
      </View>
      <View style= {styles.footer}>
        <Text style= {styles.footer_text}> Based on your wight : {kg}</Text>
        <Text style= {styles.footer_text} > Based on your height : {cm}</Text>
        <Text style= {styles.footer_text}> In this way your BMI is : {bmi}</Text>
        <Text style= {styles.footer_text}>  {bmiresponse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop:50,
    marginBottom:20,
  },
  header_title: {
    fontSize: 25,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop:50,
    marginBottom:25,
  },
  main_input:{
    marginTop:25,
    marginBottom:25,
  },
  main_button: {
    width: 400,
    marginTop:25,
    marginBottom:25,
  },
  footer:{
    marginTop:25,
    marginBottom:50,
    paddingLeft:10,
    alignSelf:"stretch",

  },
  footer_text:{
    marginBottom:25,
    paddingBottom:10,
    
  },

});
