import React, { useRef, useEffect,useState } from "react";
import {View,StyleSheet,Dimensions,Animated,Text,FlatList,TouchableOpacity, Button,ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoadingScreen = ( { navigation } ) => {
  
  const edges = useSafeAreaInsets();

  // Animation Values....
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  // Animating Content...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  // baad animation
  useEffect(() => {
    // Starting Animation after 500ms....
    setTimeout(() => {
      // Parallel Animation...
      Animated.parallel([
        Animated.timing(startAnimation, {
          // nafs l height
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // hedha el scale
          toValue: 0.2,
          useNativeDriver: true,
        }),
       Animated.timing(moveLogo, {
          // animation li bch tatla3 fouk baad lsplash image
          toValue: {
            x: Dimensions.get("window").width / 2 - 200,
            y: Dimensions.get("window").height / 2 - 250,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    navigation.replace("Next")}, 1500);
  }, []);

  // bch tatla3 kima navbar*/
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          zIndex: 1,
          transform: [{translateY: startAnimation}],
        }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Animated.Image
            source={require("../backgroundcolor.png")}
            style={{
              width: "100%",
              height: "100%",

              transform: [
                {translateX: moveLogo.x},
                {translateY: moveLogo.y},
                {scale: scaleLogo},
              ],
            }}></Animated.Image>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          zIndex: 0,
          transform: [{translateY: contentTransition}],
        }}></Animated.View>
    </View>
    
  );
};
export default LoadingScreen;
const styles = StyleSheet.create({
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: "white",
    fontWeight: "700",
  },
  contentContainer: {
    top: "40%",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
  },
});