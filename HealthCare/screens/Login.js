import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image style={styles.Appimage} source={{ uri: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png" }} />

      <View style={{ backgroundColor: "white", alignItems: "center", padding: 40, marginTop: -30 }} >

        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading} >Appointment Booking App</Text>
        <Text style={{ fontSize: 15, color: "grey", fontWeight: "800", marginTop:20 }} > Booking Appointment effortlessly  and manager your health journey</Text>
        
        <TouchableOpacity  style={styles.button}>
          <Text style={{ fontSize: 17, color: "white" }}  >Login With Google</Text>
        </TouchableOpacity>

      </View>

    </View>

  )
}

export default Login


const styles = StyleSheet.create({
  Appimage: {
    width: 400,
    height: 400,
    objectFit: "fill",
    padding: 5
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"

  },
  button:{
    padding:16,
    backgroundColor:"blue",
    alignItems:"center",
    marginTop:50,
    width:Dimensions.get("screen").width*0.8,
    borderRadius:80
  }
})
