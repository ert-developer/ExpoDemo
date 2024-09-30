import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, Text, View } from "react-native";

export function SampleScreen() {

  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Sample Screen</Text>
      <Button title="Click" onPress={()=>navigation.navigate("Home")}/>
    </View>
  );
}
