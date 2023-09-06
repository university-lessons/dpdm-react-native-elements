import { StyleSheet, View } from "react-native";
import { Text, Input, Icon, CheckBox, Switch, Button } from "@rneui/themed";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [accept, setAccept] = useState(true);

  const handleSubmit = () => console.log("Send:", name, accept);

  return (
    <View style={styles.container}>
      <Text h1>My Form</Text>

      <Input
        placeholder="Name"
        leftIcon={<Icon name="user" type="antdesign" />}
        value={name}
        onChangeText={setName}
      />

      <CheckBox
        checked={accept}
        onPress={() => {
          setAccept((prev) => !prev);
        }}
        title="Accept Terms"
      />

      <Switch value={accept} onValueChange={(value) => setAccept(value)} />

      <Button title="Cancel" type="outline" />

      <Button type="solid" onPress={handleSubmit}>
        Submit
        <Icon name="send" color="white" type="feather" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
