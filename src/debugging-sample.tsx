//FILE CÓ LỖI CỐ TÌNH

import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//LỖI 1: Import sai - StudentCard là default export nhưng dùng named import

//LỖI 2: Prop type sai - count nên là number nhưng khai báo string
interface DebugComponentProps {
  count: string; // SAI: nên là number
}

const DebugComponent: React.FC<DebugComponentProps> = ({ count }) => {
  const [counter, setCounter] = useState(0);

  //LỖI 3: Stale state update - dùng giá trị cũ của counter
  const handleIncrement = () => {
    setCounter(counter + 1); // SAI: dùng giá trị cũ
    setCounter(counter + 1); // SAI: vẫn dùng giá trị cũ
  };

  return (
    <View style={styles.container}>
      <Text>Count: {counter}</Text>
      <Text>Prop Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />

      {/*LỖI 4: Overflow - Text dài không wrap */}
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
  //LỖI 4: Thiếu flexWrap và giới hạn width
  longText: {
    fontSize: 16,
    marginTop: 10,
    // SAI: Không có flexWrap, không giới hạn width
  },
});

export default DebugComponent;
