import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FlexDirection = "row" | "column";
type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-around"
  | "space-between"
  | "space-evenly";
type AlignItems = "flex-start" | "center" | "flex-end" | "stretch";

const FlexboxLab = () => {
  const [direction, setDirection] = useState<FlexDirection>("row");
  const [justify, setJustify] = useState<JustifyContent>("center");
  const [align, setAlign] = useState<AlignItems>("center");

  // Dữ liệu các khối (block)
  const blocks = [
    { id: 1, color: "#FF6B6B", text: "Khối 1" },
    { id: 2, color: "#4ECDC4", text: "Khối 2" },
    { id: 3, color: "#45B7D1", text: "Khối 3" },
    {
      id: 4,
      color: "#FFA94D",
      text: "Khối 4 với văn bản rất dài để kiểm tra overflow và wrap khi nội dung quá dài",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Flexbox Laboratory</Text>

      {/* Bảng điều khiển */}
      <View style={styles.controls}>
        {/* Nút chuyển đổi Direction */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setDirection(direction === "row" ? "column" : "row")}
        >
          <Text style={styles.controlText}>
            Direction: {direction === "row" ? "Row" : "Column"}
          </Text>
        </TouchableOpacity>

        {/* Điều khiển justifyContent */}
        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>justifyContent:</Text>
          {[
            "flex-start",
            "center",
            "flex-end",
            "space-around",
            "space-between",
          ].map((j) => (
            <TouchableOpacity
              key={j}
              style={[styles.smallButton, justify === j && styles.activeButton]}
              onPress={() => setJustify(j as JustifyContent)}
            >
              <Text style={styles.smallButtonText}>
                {j === "flex-start"
                  ? "←"
                  : j === "center"
                    ? "↔"
                    : j === "flex-end"
                      ? "→"
                      : j === "space-around"
                        ? "↔↔"
                        : "↔↔↔"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Điều khiển alignItems */}
        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>alignItems:</Text>
          {["flex-start", "center", "flex-end", "stretch"].map((a) => (
            <TouchableOpacity
              key={a}
              style={[styles.smallButton, align === a && styles.activeButton]}
              onPress={() => setAlign(a as AlignItems)}
            >
              <Text style={styles.smallButtonText}>
                {a === "flex-start"
                  ? "⬆"
                  : a === "center"
                    ? "⏺"
                    : a === "flex-end"
                      ? "⬇"
                      : "↕"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Container Flexbox - NƠI THỰC HÀNH */}
      <View
        style={[
          styles.flexContainer,
          {
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
          },
        ]}
      >
        {blocks.map((block) => (
          <View
            key={block.id}
            style={[
              styles.block,
              { backgroundColor: block.color },
              // Khối 4 có thể wrap nếu nội dung dài
              block.id === 4 && { flexWrap: "wrap" },
            ]}
          >
            <Text style={styles.blockText}>{block.text}</Text>
          </View>
        ))}
      </View>

      {/* Thông tin hiển thị */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Direction: {direction}
          {"\n"}
          justifyContent: {justify}
          {"\n"}
          alignItems: {align}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#2c3e50",
  },
  controls: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  controlButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: "center",
  },
  controlText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  controlRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    flexWrap: "wrap",
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
    minWidth: 80,
    color: "#333",
  },
  smallButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#e9ecef",
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeButton: {
    backgroundColor: "#007bff",
  },
  smallButtonText: {
    fontSize: 14,
    color: "#333",
  },
  // CONTAINER FLEXBOX - QUAN TRỌNG
  flexContainer: {
    minHeight: 400,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#dee2e6",
    borderStyle: "dashed",
  },
  // CÁC KHỐI CON
  block: {
    padding: 12,
    margin: 6,
    borderRadius: 6,
    minWidth: 60,
    minHeight: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  blockText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});

export default FlexboxLab;
