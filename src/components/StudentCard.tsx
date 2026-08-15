// src/components/StudentCard.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import InfoRow from "./InfoRow";

// kiểu dữ liệu cho StudentCard
interface StudentCardProps {
  studentId: string;
  name: string;
  major: string;
  cohort: string; //niên khóa
  //prop cho status message
  initialMessage?: string;
}

const StudentCard = ({
  studentId,
  name,
  major,
  cohort,

  initialMessage = "Chưa có cập nhật",
}: StudentCardProps) => {
  //Câu 6
  const [committedMessage, setCommittedMessage] = useState(initialMessage); // Giá trị đã lưu
  const [draftMessage, setDraftMessage] = useState(""); // Giá trị đang nhập

  //lưu
  const handleSave = () => {
    if (draftMessage.trim()) {
      setCommittedMessage(draftMessage); //cập nhật giá trị đã lưu
      setDraftMessage(""); //xóa draft sau khi lưu
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>THÔNG TIN SINH VIÊN</Text>

      <InfoRow label="Mã SV:" value={studentId} />
      <InfoRow label="Họ tên:" value={name} />
      <InfoRow label="Ngành học:" value={major} />
      <InfoRow label="Niên khóa:" value={cohort} />

      {/*Hiển thị trạng thái đã lưu */}
      <View style={styles.messageSection}>
        <Text style={styles.messageLabel}>Trạng thái:</Text>
        <Text style={styles.committedMessage}>{committedMessage}</Text>
      </View>

      {/*Chỉnh sửa trạng thái mới */}
      <View style={styles.editSection}>
        <Text style={styles.editLabel}>Cập nhật trạng thái:</Text>
        <TextInput
          style={styles.input}
          value={draftMessage}
          onChangeText={setDraftMessage}
          placeholder="Nhập trạng thái mới..."
          multiline
        />
        <TouchableOpacity
          style={[
            styles.saveButton,
            !draftMessage.trim() && styles.saveButtonDisabled,
          ]}
          onPress={handleSave}
          disabled={!draftMessage.trim()}
        >
          <Text style={styles.saveButtonText}> Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  //da luu

  messageSection: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cce5ff",
  },
  messageLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  committedMessage: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "500",
  },
  //chinh sua
  editSection: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  editLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  //input text
  input: {
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    minHeight: 50,
    backgroundColor: "#fff",
    textAlignVertical: "top", //text căn trên cùng khi multiline
  },

  //nút Save
  saveButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
    borderRadius: 6,
    alignItems: "center",
  },
  saveButtonDisabled: {
    backgroundColor: "#adb5bd",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default StudentCard;
