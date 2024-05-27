import React from "react";
import "./CourseList.scss";
import CourseCard from "components/CourseCard/CourseCard";
import { Course } from "types/Course";

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id} className="course-list-item">
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
