import * as React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@/components/bottom";
import { moderateScale } from "react-native-size-matters";

export function MenuScreen() {
  const navigation = useNavigation();

  const [open, setOpen] = React.useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Menu Screen</Text>
      <Button title="Click" onPress={() => setOpen(true)} />
      <BottomSheet
        isOpen={open}
        duration={200}
        toggleSheet={() => setOpen(false)}
      >
        <TouchableOpacity style={{ flex: 1, padding: moderateScale(20) }}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
}
