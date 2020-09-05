import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles/index";
import agent from "../../agent";
import { Agenda, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { getTimetable } from "../../helper";
import SubjectItem from "./componets/SubjectItem";

LocaleConfig.locales["vi"] = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  dayNames: [
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
    "Chủ nhật",
  ],
  dayNamesShort: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
};

LocaleConfig.defaultLocale = "vi";
export default function TimetableScreen() {
  const [items, setItem] = useState({});
  const [maxRangeDate, setMaxRangeDate] = useState(
    moment().subtract(1, "month").format("YYYY-MM-DD")
  );
  const [minRangeDate, setMinRangeDate] = useState(
    moment().add(1, "month").format("YYYY-MM-DD")
  );
  useEffect(() => {
    async function loadTimetables() {
      try {
        const currentSemester: any = await agent
          .get("/semester/semester_info")
          .then((res) => res.data);
        const courseSubjects = await agent
          .get("/StudentCourseSubject/studentLoginUser/" + currentSemester.id)
          .then((res) => res.data);
          setMaxRangeDate(moment(currentSemester.endDate).format());
          setMinRangeDate(moment(currentSemester.startDate).format());
          setItem(getTimetable(courseSubjects));
      } catch (error) {
        Alert.alert(error.message);
      }
    }
    loadTimetables();
  }, []);
  const today: string = moment().format("YYYY-MM-DD");
  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={today}
        renderItem={(item, firstItemInDay) => {
          return <SubjectItem subject={item} firstItem={firstItemInDay} />;
        }}
        minDate={minRangeDate}
        maxDate={maxRangeDate}
        renderEmptyDate={() => {
          return <View />;
        }}
        rowHasChanged={(r1: any, r2: any) => {
          return r1.subjectName !== r2.subjectName;
        }}
        renderEmptyData={() => {
          return <View />;
        }}
        markedDates={{
          today: { selected: true, marked: true },
        }}
        theme={{
          agendaTodayColor: "red",
          agendaKnobColor: "blue",
        }}
      />
    </View>
  );
}
