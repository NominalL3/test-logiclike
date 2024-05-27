import React from "react";
import { Course } from "types/Course";
import "./CourseCard.scss";

interface CourseCardProps extends Course {}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  name,
  image,
  bgColor,
}) => (
  <div key={id} className="course-card" style={{ backgroundColor: bgColor }}>
    <div className="course-image-container">
      <img src={image} alt={name} className="course-image" />
    </div>
    <h3 className="course-title">{name}</h3>
  </div>
);

export default CourseCard;
