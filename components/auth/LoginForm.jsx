import { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

import AppleLogo from "../../assets/logo/apple.png";
import GoogleLogo from "../../assets/logo/google.png";
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
const LoginForm = () => {
  const navigation = useNavigation();
  const [checkedLogin, setCheckLogin] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "driver" }],
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 12,
        }}
      >
        Let's join with us
      </Text>
      <Text style={{ textAlign: "center", color: "gray" }}>
        Enter your mobile number to get started
      </Text>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 20,
            borderWidth: 1,
            borderColor: "gray",
            gap: 20,
            alignItems: "center",
          }}
          onPress={() => console.log("Sign In Pressed")}
        >
          <Image source={AppleLogo} style={{ width: 20, height: 20 }}></Image>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Sign in with Apple
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 10,
            marginVertical: 20,
            borderWidth: 1,
            borderColor: "gray",
            gap: 20,
            alignItems: "center",
          }}
          onPress={() => console.log("Sign In Pressed")}
        >
          <Image source={GoogleLogo} style={{ width: 20, height: 20 }}></Image>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Or
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Email</Text>
        <TextInput
          style={{ borderWidth: 1, borderRadius: 10, borderColor: "gray" }}
          placeholder="Enter email"
          onChangeText={setEmail}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Password</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry={true}
          style={{ borderWidth: 1, borderRadius: 10, borderColor: "gray" }}
          onChangeText={setPassword}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable
            onPress={() => setCheckLogin(!checkedLogin)}
            style={{
              height: 20,
              width: 20,
              borderWidth: 2,
              borderColor: "#444",
              borderRadius: 4,
              backgroundColor: checkedLogin ? "#007AFF" : "transparent",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {checkedLogin && (
              <Text style={{ color: "white", fontWeight: "bold" }}></Text>
            )}
          </Pressable>

          <Text style={{ color: "gray" }}>Saved login info</Text>
        </View>
        <View>
          <Text style={{ color: "gray" }}>Forget password?</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            paddingVertical: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 10,
            marginVertical: 20,
          }}
          onPress={singIn}
        >
          <Text style={{ color: "white" }}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: "center" }}>
        The site is protected by reCAPTCHA and the Google{" "}
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text> and{" "}
        <Text style={{ fontWeight: "bold" }}>Terms of Service</Text> apply
      </Text>
    </View>
  );
};

export default LoginForm;
