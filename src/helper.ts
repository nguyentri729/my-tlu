import _ from "lodash";
import moment from "moment";

export const getTimetable = (courseSubjects: any) => {
  const semester = _.get(
    courseSubjects,
    "0.courseSubject.semesterSubject.semester"
  );
  const timetableByDate: any = {};
  _.forEach(courseSubjects, (subject) => {
    const { courseSubject, subjectName } = subject;
    _.forEach(courseSubject.timetables, (timetable) => {
      const startLearnTime = moment(semester.startDate).add(
        timetable.fromWeek - 1,
        "weeks"
      );
      const endLearnTime = moment(semester.startDate)
        .add(timetable.toWeek, "weeks")
        .subtract(1, "day");
      // console.log(subject.subjectName, startLearnTime.format("DD/MM/YYYY"), endLearnTime.format("DD/MM/YYYY"))
      const rangeLearnTime =
        (timetable.toWeek - timetable.fromWeek + 1) * 7 - 1;
      for (let i = 0; i < rangeLearnTime; i++) {
        const currentDate = startLearnTime.clone().add(i, "day");

        if (currentDate.weekday() + 1 === timetable.weekIndex) {
          const currentDateString = currentDate.format("DD/MM/YYYY").toString();
          const { startHour, endHour, room } = timetable;
          const lesson = {
            subjectName,
            startHour,
            endHour,
            room,
          };

          timetableByDate[currentDateString] = [
            ..._.get(timetableByDate, "currentDateString", []),
            lesson,
          ];
        }
      }
    });
  });
  return timetableByDate;
};
