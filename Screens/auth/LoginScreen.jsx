import { TouchableOpacity, View, Text, Pressable } from "react-native";
import LoginForm from "../../components/auth/LoginForm";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 0, paddingHorizontal: 20 }}>
      <Pressable onPress={() => navigation.navigate("signup")}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 20,
            textAlign: "right",
            color: "green",
          }}
        >
          SignUp
        </Text>
      </Pressable>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
