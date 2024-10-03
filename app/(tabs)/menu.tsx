import * as React from "react";
import {
  Alert,
  Button,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@/components/bottom";
import { moderateScale } from "react-native-size-matters";
import * as Location from "expo-location";

export function MenuScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      setErrorMsg(status);

      if (status !== "granted") {
        // Show the alert if permission is denied
        Alert.alert(
          "Permission Required",
          "Location permission is required. Please enable it in settings.",
          [
            {
              text: "OK",
              onPress: () => Linking.openSettings(),
            },
            {
              text: "Cancel",
              style: "cancel",
            },
          ]
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {errorMsg === Location.PermissionStatus.DENIED && errorMsg ? (
        <Button title={"Grant Permission"} onPress={Linking.openSettings} />
      ) : (
        <Text>{"Accepted"}</Text>
      )}
      <Text>Menu Screen</Text>
      <Button title="Click" onPress={() => setOpen(true)} />
      <BottomSheet
        isOpen={open}
        duration={200}
        toggleSheet={() => setOpen(false)}
      >
        <TouchableOpacity style={{ flex: 1, padding: moderateScale(20) }}>
          <Text style={{ fontFamily: "Inter-Black" }}>
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
