import React, { useState } from "react"; // ✅ THÊM: import useState
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CampusStatusCard from "../../src/components/CampusStatusCard";
import StudentCard from "../../src/components/StudentCard";
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
    major: "Kỹ Thuật Phần Mềm",
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

  // câu 10 state để lưu campus được chọn
  const [selectedCampusId, setSelectedCampusId] = useState<number | null>(null);

  //câu 10 typed callback để chọn campus
  const handleSelectCampus = (id: number) => {
    setSelectedCampusId(id);
    console.log(` Đã chọn campus ID: ${id}`);
  };

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

        {/* cau 5*/}
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

        {/* cau 10 campusStatusCard */}
        <View style={styles.cau10Container}>
          <Text style={styles.cau10Title}>CÂU 10: CHỌN CAMPUS</Text>

          {/* Hiển thị campus đã chọn */}
          <Text style={styles.cau10SubTitle}>
            {selectedCampusId !== null
              ? `Đã chọn: ${campusServices.find((c) => c.id === selectedCampusId)?.name}`
              : "Vui lòng chọn một campus"}
          </Text>

          {campusServices.map((campus) => (
            <CampusStatusCard
              key={campus.id}
              campus={campus}
              isSelected={selectedCampusId === campus.id}
              onSelectCampus={handleSelectCampus}
            />
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

  // cau 10
  cau10Container: {
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  cau10Title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#2c3e50",
  },
  cau10SubTitle: {
    fontSize: 14,
    color: "#0066cc",
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "500",
  },
});
