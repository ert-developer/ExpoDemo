import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/assets/constants/Colors";
import { constants } from "./HeaderAnim2";

const { width: sWidth } = Dimensions.get("screen");

type Props = {
  iconName: string;
  text: string;
  color: string;
};

type ListItemProps = {
  iconType: Function;
  icon: string;
  color: string;
  name: string;
  desc: string;
};
type CTAItemProps = {
  iconType: Function;
  iconName: string;
  color: string;
  name: string;
};

export const MembersTab = ({ iconName, text, color }: Props) => {
  return (
    <View style={[styles.optionList, { alignItems: "center" }]}>
      <View style={styles.circleIconContainer}>
        <Ionicons name={"add-circle-sharp"} color={Colors.white} />
      </View>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
};

export const ListItem = ({
  iconType,
  icon,
  color,
  name,
  desc,
}: ListItemProps) => {
  return (
    <View style={styles.optionList}>
      <Ionicons name={"add"} color={Colors.gray} />
      <View style={styles.optionListTextContainer}>
        <Text style={[styles.optionListText, { color }]}>{name}</Text>
        {desc && <Text style={styles.descriptionTextStyles}>{desc}</Text>}
      </View>
    </View>
  );
};

export const CTAItems = ({ iconName, iconType, color, name }: CTAItemProps) => {
  return (
    <View style={styles.listItem}>
      <Ionicons name={"medical-outline"} color={Colors.gray} />
      <Text
        style={{ color, textAlign: "center", fontWeight: "500", marginTop: 5 }}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionList: {
    flexDirection: "row",
    padding: 20,
  },
  circleIconContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: Colors.green,
  },
  text: {
    fontSize: constants.textSize,
    paddingHorizontal: constants.padding,
  },
  optionListText: {
    fontSize: 20,
    fontWeight: "500",
  },
  optionListTextContainer: {
    paddingHorizontal: 24,
    width: "80%",
  },
  descriptionTextStyles: {
    color: Colors.gray,
    marginTop: 4,
    fontSize: constants.padding,
  },
  listItem: {
    width: sWidth / 4 - 20,
    height: 64,
    borderRadius: constants.margin,
    borderWidth: 1,
    borderColor: Colors.gray + "80",
    justifyContent: "center",
    alignItems: "center",
  },
});
