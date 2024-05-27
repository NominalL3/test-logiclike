import React, { useEffect, useState, useMemo } from "react";
import "./App.scss";
import TagList from "components/TagList/TagList";
import CourseList from "components/CourseList/CourseList";
import { Course } from "types/Course";

const fetchCourses = async (): Promise<Course[]> => {
  const response = await fetch("https://logiclike.com/docs/courses.json");
  return response.json();
};

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("Все темы");

  useEffect(() => {
    const loadCourses = async () => {
      setCourses(await fetchCourses());
    };

    loadCourses();
  }, []);

  const tags = useMemo(() => {
    return ["Все темы", ...new Set(courses.flatMap((course) => course.tags))];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter(
      (course) =>
        selectedTag === "Все темы" || course.tags.includes(selectedTag)
    );
  }, [courses, selectedTag]);

  return (
    <div className="app">
      <TagList
        tags={tags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;
