import { View, Text, TouchableOpacity } from "react-native";
const DriverProfile = ({ selectDriver, setSelectDriver }) => {
  return (
    <View>
      <Text>Name: {selectDriver.name}</Text>
      <Text>Vehicle type: {selectDriver.vehicle}</Text>
      <Text>
        Available: {selectDriver.available ? "Available" : "Not Avail"}
      </Text>
      <TouchableOpacity
        onPress={() => setSelectDriver(null)}
        style={{ backgroundColor: "red", width: 100 }}
      >
        <Text style={{ color: "white", paddingVertical: 2 }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverProfile;
