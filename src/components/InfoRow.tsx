import React from "react";
import { StyleSheet, Text, View } from "react-native";

// YÊU CẦU 2: Định nghĩa Interface dùng TypeScript
interface InfoRowProps {
  label: string;
  value: string;
  emphasized?: boolean; // Tùy chọn
}

const InfoRow = ({ label, value, emphasized = false }: InfoRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {/* Dùng mảng style để điều kiện in đậm nếu emphasized = true */}
      <Text style={[styles.value, emphasized && styles.emphasizedText]}>
        {value}
      </Text>
    </View>
  );
};

// YÊU CẦU 3: StyleSheet dùng Flexbox (row, center)
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row", // Sắp xếp ngang
//     alignItems: "center", // Căn giữa theo chiều dọc
//     justifyContent: "space-between", // (Mình thêm vào để label trái, value phải cho đẹp như giao diện thực tế, không bắt buộc)
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },
//   label: {
//     fontSize: 16,
//     color: "#555",
//     fontWeight: "500",
//   },
//   value: {
//     fontSize: 16,
//     color: "#000",
//   },
//   emphasizedText: {
//     fontWeight: "bold",
//     color: "#007bff", // Màu xanh để làm nổi bật
//   },
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", // Căn giữa theo chiều dọc
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 0, // Bỏ padding 2 bên trong hàng để tránh bị bóp
    width: "100%", // Đảm bảo chiếm hết chiều ngang thẻ cha
  },
  label: {
    fontSize: 16,
    color: "#555",
    fontWeight: "500",
    width: 80, // Đặt chiều rộng cố định cho Label để Value có chỗ co dãn
  },
  value: {
    fontSize: 16,
    color: "#000",
    flex: 1, // QUAN TRỌNG: Cho phép chiếm phần diện tích còn lại
    flexShrink: 1, // QUAN TRỌNG: Cho phép thu nhỏ lại nếu nội dung quá dài
    textAlign: "right", // Căn phải cho đẹp
  },
  emphasizedText: {
    fontWeight: "bold",
    color: "#007bff",
  },
});
export default InfoRow;
