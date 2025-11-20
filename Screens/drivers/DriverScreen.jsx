import { View, Text, FlatList, TextInput, Pressable } from "react-native";
import DriverDetails from "../../components/drivers/DriverDetails";
import DriverProfile from "../../components/drivers/DriverProfile";
import { useMemo, useState } from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
const drivers = [
  {
    id: "1",
    name: "John Doe",
    vehicle: "Car",
    available: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    vehicle: "Van",
    available: false,
  },
  {
    id: "3",
    name: "Mike Johnson",
    vehicle: "Truck",
    available: true,
  },
  {
    id: "4",
    name: "Alice Brown",
    vehicle: "Motorcycle",
    available: true,
  },
  {
    id: "5",
    name: "Bob Wilson",
    vehicle: "Car",
    available: false,
  },
  {
    id: "6",
    name: "Charlie Davis",
    vehicle: "Van",
    available: true,
  },
  {
    id: "7",
    name: "Diana Miller",
    vehicle: "Truck",
    available: true,
  },
  {
    id: "8",
    name: "Ethan Garcia",
    vehicle: "Car",
    available: true,
  },
  {
    id: "9",
    name: "Fiona Rodriguez",
    vehicle: "Motorcycle",
    available: false,
  },
  {
    id: "10",
    name: "George Martinez",
    vehicle: "Van",
    available: true,
  },
];
const DriversScreen = () => {
  const [selectDriver, setSelectDriver] = useState(null);
  const [search, setSearch] = useState("");
  const handleViewDriver = (driver) => {
    setSelectDriver(driver);
  };
  const [vehicleType, setVehicleType] = useState("");
  const [availability, setAvailability] = useState("");

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      const lowerCaseQuery = search.toLowerCase().trim();

      const nameMatch = driver.name.toLowerCase().includes(lowerCaseQuery);
      const vehicleMatch = driver.vehicle
        .toLowerCase()
        .includes(lowerCaseQuery);

      const availabilityStatus = driver.available
        ? "available"
        : "not available";
      const availabilityMatch = availabilityStatus.includes(lowerCaseQuery);

      const searchMatch =
        !search || nameMatch || vehicleMatch || availabilityMatch;

      const vehicleTypeMatch =
        !vehicleType ||
        driver.vehicle.toLowerCase() === vehicleType.toLowerCase();

      const availabilityDropdownMatch =
        !availability ||
        driver.available.toString() === availability.toString();

      return searchMatch && vehicleTypeMatch && availabilityDropdownMatch;
    });
  }, [search, vehicleType, availability]);

  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };
  return (
    <View style={{ marginTop: 10 }}>
      <View>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 20,
          }}
          onPress={handleLogout}
        >
          <Text style={{ fontSize: 20, color: "green", fontWeight: "bold" }}>
            Log out
          </Text>
        </Pressable>
      </View>

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Picker
          selectedValue={vehicleType}
          style={{ height: 50, width: 100 }}
          onValueChange={(value) => setVehicleType(value)}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Car" value="Car" />
          <Picker.Item label="Motorcycle" value="Motorcycle" />
          <Picker.Item label="Truck" value="Truck" />
        </Picker>

        <Picker
          selectedValue={availability}
          onValueChange={(value) => setAvailability(value)}
          style={{ height: 50, width: 100 }}
        >
          <Picker.Item label="Any" value="" />
          <Picker.Item label="Available" value="true" />
          <Picker.Item label="Unavailable" value="false" />
        </Picker>
        <TextInput
          placeholder="Search ..."
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "gray",
            width: 150,
            paddingHorizontal: 10,
            marginVertical: 20,
            marginRight: 10,
          }}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          borderWidth: 1,
          justifyContent: "space-around",
          backgroundColor: "gray",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Name
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Vehicle Type
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Availability
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Action
        </Text>
      </View>
      <FlatList
        data={filteredDrivers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DriverDetails item={item} onView={handleViewDriver} />
        )}
      />
      {selectDriver && (
        <DriverProfile
          selectDriver={selectDriver}
          setSelectDriver={setSelectDriver}
        />
      )}
      {filteredDrivers.length === 0 && (
        <View>
          <Text style={{ textAlign: "center", marginVertical: 100 }}>
            No drivers found
          </Text>
        </View>
      )}
    </View>
  );
};

export default DriversScreen;
