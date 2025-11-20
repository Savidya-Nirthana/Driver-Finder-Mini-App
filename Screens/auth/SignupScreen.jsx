import { TouchableOpacity, View, Text, Pressable } from "react-native";
import SignupForm from "../../components/auth/SignupForm";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 0, paddingHorizontal: 20 }}>
      <Pressable onPress={() => navigation.navigate("login")}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 20,
            textAlign: "right",
            color: "green",
          }}
        >
          Login
        </Text>
      </Pressable>
      <SignupForm />
    </View>
  );
};

export default SignupScreen;
