import React, { useState } from "react";  
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";  
import vetor from "../../assets/vetor.png";  

export default function Layout() {  
  // Define state for background color  
  const [backgroundColor, setBackgroundColor] = useState('#fa8d6e');  

  const handleChangeBackground = () => {  
    setBackgroundColor(prevColor =>  
      prevColor === '#fa8d6e' ? '#525b8c' : '#fa8d6e'  
    );  
  };  

  return (  
    <View style={[styles.container, { backgroundColor }]}>  
      <View style={{flex: 1, gap: 30}}>  
        <Image source={vetor} style={styles.image} />  
        <Text style={styles.title}>Find Your Favorite Course</Text>  
        <Text style={styles.description}>  
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam  
          blanditiis illo, recusandae nisi quidem cumque officiis? Nesciunt  
          fugiat voluptatum aut hic quam? Illo itaque voluptas iusto sapiente  
          ipsam exercitationem officia?  
        </Text>  
      </View>  
      <TouchableOpacity style={styles.button} onPress={handleChangeBackground}>  
        <Text style={styles.buttonText}>Get Started</Text>  
      </TouchableOpacity>  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: "center",  
    alignItems: "center",  
    padding: 20,  
  },  
  image: {  
    width: 360,  
    height: 360,  
    resizeMode: "contain",  
  },  
  title: {  
    fontSize: 30,  
    fontWeight: "bold",  
    color: "#f7f7f7",  
    textAlign: "center",  
  },  
  description: {  
    fontSize: 17,  
    padding: 6,  
    color: '#f7f7f7',  
  },  
  button: {  
    backgroundColor: '#ffff',  
    paddingVertical: 20,  
    paddingHorizontal: 60,  
    borderRadius: 30,  
    marginBottom: 70,  
  },  
  buttonText: {  
    color: '#f55d32',  
    fontSize: 16,  
    fontWeight: 'bold',  
  },  
});