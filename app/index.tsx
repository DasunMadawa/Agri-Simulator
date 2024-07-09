import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  console.log(Dimensions.get("screen"));
  console.log(Dimensions.get("window"));

  return (
    <SafeAreaView 
      className="border border-red-500 border-8"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width:'100%'
      }}
    >
      <Text className="text-blue-400" style={styles.nameText}>Edit app/index.tsx to edit this screen.</Text>
      <Button
        
        title="Learn More"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
        style={styles.reactLogo}
        source={require('@/assets/images/react-logo.png')}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 30
  },
  reactLogo: {
    height:100
  }
});

