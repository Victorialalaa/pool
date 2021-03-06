import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";

export default function ChemicalLevel() {
  const [range, setRange] = useState("50%");
  const [sliding, setSliding] = useState("Inactive");

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{range}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{sliding}</Text>

        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="tomato"
          value={0.5}
          onValueChange={(value) => setRange(parseInt(value * 100) + "%")}
          onSlidingStart={() => setSliding("Sliding")}
          onSlidingComplete={() => setSliding("Inactive")}
        />

        <StatusBar style="auto" />
      </ScrollView>
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
