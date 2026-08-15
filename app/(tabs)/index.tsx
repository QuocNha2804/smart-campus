// // app/(tabs)/index.tsx
// import React from "react";
// import { SafeAreaView, ScrollView } from "react-native";
// import StudentCard from "../../src/components/StudentCard"; // Import component từ thư mục src

// export default function TabOneScreen() {
//   // Dữ liệu test bình thường
//   const normalData = {
//     studentId: "23636501",
//     name: "Trần Quốc Nhã",
//     major: "Kĩ Thuật Phần Mềm",
//     cohort: "K19",
//   };

//   // Dữ liệu test Stress (Tên ngành dài 50 ký tự)
//   const stressData = {
//     studentId: "24692521",
//     name: "Lê Thanh Vân",
//     major:
//       "Kỹ thuật phần mềm ứng dụng và trí tuệ nhân tạo đa phương tiện trong kỷ nguyên số 4.0 ABCXYZ",
//     cohort: "K20",
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f2f5" }}>
//       <ScrollView>
//         {/* Thẻ thứ nhất: Dữ liệu ngắn */}
//         <StudentCard
//           studentId={normalData.studentId}
//           name={normalData.name}
//           major={normalData.major}
//           cohort={normalData.cohort}
//         />

//         {/* Thẻ thứ hai: Dữ liệu dài (Test Stress) */}
//         <StudentCard
//           studentId={stressData.studentId}
//           name={stressData.name}
//           major={stressData.major}
//           cohort={stressData.cohort}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// app/(tabs)/index.tsx
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "../../src/components/StudentCard";

// Import Câu 5
import { CampusService } from "../../src/types";
import { getServiceDisplayText } from "../../src/utils/serviceUtils";

export default function TabOneScreen() {
  const normalData = {
    studentId: "23636501",
    name: "Trần Quốc Nhã",
    major: "Kĩ Thuật Phần Mềm",
    cohort: "K19",
  };

  const stressData = {
    studentId: "24692521",
    name: "Lê Thanh Vân",
    major:
      "Kỹ thuật phần mềm ứng dụng và trí tuệ nhân tạo đa phương tiện trong kỷ nguyên số 4.0 ABCXYZ",
    cohort: "K20",
  };

  const campusServices: CampusService[] = [
    {
      id: 101,
      name: "Thư viện Đại học Công nghiệp",
      openingStatus: "busy",
      waitTime: 15,
      locations: ["Tầng trệt - Tầng kĩ thuật", "Tầng 2 - Tầng 3"],
    },
    {
      id: 102,
      name: "Phòng Gym",
      openingStatus: "open",
      waitTime: 5,
      locations: ["Tầng 1 - Khu thể thao"],
    },
    {
      id: 103,
      name: "Khoa CNTT",
      openingStatus: "closed",
      locations: ["Tầng 2 - Tòa H"],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f2f5" }}>
      <ScrollView>
        <StudentCard
          studentId={normalData.studentId}
          name={normalData.name}
          major={normalData.major}
          cohort={normalData.cohort}
        />

        <StudentCard
          studentId={stressData.studentId}
          name={stressData.name}
          major={stressData.major}
          cohort={stressData.cohort}
        />

        {/* cau 5 */}
        <View style={styles.cau5Container}>
          <Text style={styles.cau5Title}>CÂU 5: THÔNG TIN DỊCH VỤ</Text>
          {campusServices.map((service) => (
            <View key={service.id} style={styles.cau5Item}>
              <Text style={styles.cau5Text}>
                {getServiceDisplayText(service)}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cau5Container: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  cau5Title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#2c3e50",
  },
  cau5Item: {
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 8,
  },
  cau5Text: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});
