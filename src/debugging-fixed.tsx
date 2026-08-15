// CODE ĐÃ SỬA LỖI

import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//SỬA 1: Import đúng cách (default import)

//SỬA 2: Sửa kiểu prop thành number
interface DebugComponentProps {
  count: number; // ĐÚNG: number
}

const DebugComponent: React.FC<DebugComponentProps> = ({ count }) => {
  const [counter, setCounter] = useState(0);

  //SỬA 3: Dùng functional update để lấy giá trị mới nhất
  const handleIncrement = () => {
    setCounter((prev) => prev + 1); // ĐÚNG: dùng prev
    setCounter((prev) => prev + 1); // ĐÚNG: dùng prev
    // Bây giờ mỗi lần click sẽ tăng 2
  };

  return (
    <View style={styles.container}>
      <Text>Count: {counter}</Text>
      <Text>Prop Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />

      {/*SỬA 4: Thêm flexWrap và giới hạn width */}
      <Text style={styles.longText}>
        Đây là văn bản rất dài không có giới hạn và sẽ bị tràn ra ngoài màn hình
        gây ra vấn đề về giao diện người dùng. Văn bản này còn dài hơn nữa để
        chắc chắn rằng nó sẽ tràn ra ngoài khung hình và gây ra lỗi hiển thị.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  //SỬA 4: Thêm flexWrap và maxWidth
  longText: {
    fontSize: 16,
    marginTop: 10,
    flexWrap: "wrap", // Cho phép xuống dòng
    maxWidth: "100%", // Giới hạn chiều rộng
    padding: 8,
    backgroundColor: "#f8f9fa",
    borderRadius: 4,
  },
});

export default DebugComponent;
