// src/components/StudentCard.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoRow from "./InfoRow"; // Import component đã làm ở Task 2

// Định nghĩa kiểu dữ liệu cho StudentCard
interface StudentCardProps {
  studentId: string;
  name: string;
  major: string;
  cohort: string; // Niên khóa
}

const StudentCard = ({ studentId, name, major, cohort }: StudentCardProps) => {
  return (
    <View style={styles.cardContainer}>
      {/* Tiêu đề của thẻ (tùy chọn để đẹp) */}
      <Text style={styles.cardTitle}>THÔNG TIN SINH VIÊN</Text>

      {/* Sử dụng lại InfoRow để hiển thị từng dòng thông tin */}
      <InfoRow label="Mã SV:" value={studentId} />
      <InfoRow label="Họ tên:" value={name} />
      <InfoRow label="Ngành học:" value={major} />
      <InfoRow label="Niên khóa:" value={cohort} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    // Tạo bóng đổ để thẻ nổi bật lên (optional)
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
});

export default StudentCard;
