import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DriverProfile from "./DriverProfile";

const DriverDetails = ({ item, onView }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#F5F5F5",
        borderRadius: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
      }}
    >
      <Text
        style={{
          flex: 1.5,
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: 1,
          width: "22%",
        }}
      >
        {item.name}
      </Text>
      <Text style={{ flex: 1, textAlign: "left", width: "40%" }}>
        {item.vehicle}
      </Text>
      <Text
        style={{
          color: item.available ? "white" : "white",
          backgroundColor: item.available ? "green" : "red",
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 15,
          fontSize: 12,
          fontWeight: "600",
          width: "25%",
        }}
      >
        {item.available ? "Available" : "Not Avail"}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          paddingVertical: 3,
          paddingHorizontal: 8,
          borderRadius: 10,

          width: "15%",
          marginHorizontal: 2,
        }}
        onPress={() => {
          onView(item);
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          View
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverDetails;
