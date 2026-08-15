import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CampusService, OpeningStatus } from "../types";

interface CampusStatusCardProps {
  campus: CampusService;
  isSelected: boolean;
  onSelectCampus: (id: number) => void;
}

const CampusStatusCard: React.FC<CampusStatusCardProps> = ({
  campus,
  isSelected,
  onSelectCampus,
}) => {
  const getStatusInfo = (status: OpeningStatus) => {
    const statusMap = {
      open: {
        color: "#28a745",
        text: "Đang mở cửa",
        bgColor: "#d4edda",
      },
      closed: {
        color: "#dc3545",
        text: "Đã đóng cửa",
        bgColor: "#f8d7da",
      },
      busy: {
        color: "#fd7e14",
        text: "Đang bận",
        bgColor: "#fff3cd",
      },
    };
    return (
      statusMap[status] || {
        color: "#6c757d",
        text: "Không xác định",
        bgColor: "#e9ecef",
      }
    );
  };

  const statusInfo = getStatusInfo(campus.openingStatus);

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={() => onSelectCampus(campus.id)}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{campus.name}</Text>
        <View
          style={[styles.statusBadge, { backgroundColor: statusInfo.bgColor }]}
        >
          <Text style={[styles.statusText, { color: statusInfo.color }]}>
            {statusInfo.text}
          </Text>
        </View>
      </View>

      {campus.waitTime && (
        <Text style={styles.waitTimeText}>Chờ ~ {campus.waitTime} phút</Text>
      )}

      <Text style={styles.locationsText}>{campus.locations.join(" → ")}</Text>

      <TouchableOpacity
        style={[styles.selectButton, isSelected && styles.selectedButton]}
        onPress={() => onSelectCampus(campus.id)}
      >
        <Text
          style={[
            styles.selectButtonText,
            isSelected && styles.selectedButtonText,
          ]}
        >
          {isSelected ? "Đã chọn" : "Chọn campus này"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e9ecef",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  selectedCard: {
    borderColor: "#007bff",
    backgroundColor: "#f0f7ff",
    borderWidth: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  waitTimeText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  locationsText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  selectButton: {
    paddingVertical: 8,
    backgroundColor: "#007bff",
    borderRadius: 6,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#28a745",
  },
  selectButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  selectedButtonText: {
    color: "#fff",
  },
});

export default CampusStatusCard;
