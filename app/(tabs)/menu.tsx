import * as React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function MenuScreen() {
    const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menu Screen</Text>
            <Button title="Click" onPress={()=>navigation.navigate("Sample")}/>
    </View>
  );
}
