import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppleLogo from "../../assets/logo/apple.png";
import GoogleLogo from "../../assets/logo/google.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { useState } from "react";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    if (!email || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      alert("success");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, flexGrow: 1 }}
      >
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
              <Image
                source={AppleLogo}
                style={{ width: 20, height: 20 }}
              ></Image>
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
              <Image
                source={GoogleLogo}
                style={{ width: 20, height: 20 }}
              ></Image>
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
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Email</Text>
            <TextInput
              style={{ borderWidth: 1, borderRadius: 10, borderColor: "gray" }}
              placeholder="Enter email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              Password
            </Text>
            <TextInput
              placeholder="Enter password"
              secureTextEntry={true}
              style={{ borderWidth: 1, borderRadius: 10, borderColor: "gray" }}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              Confirm Password
            </Text>
            <TextInput
              placeholder="Confirm password"
              secureTextEntry={true}
              style={{ borderWidth: 1, borderRadius: 10, borderColor: "gray" }}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
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
              onPress={signUp}
            >
              <Text style={{ color: "white" }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupForm;
