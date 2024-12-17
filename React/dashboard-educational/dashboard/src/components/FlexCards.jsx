import CourseCard from "../reusable/CourseCard";
import useFetch from "../hooks/useFetch";

const FlexCards = () => {
  const { courses, visibleCourses, showAll, handleViewAll } = useFetch(
    "http://localhost:3001/api/courses"
  );

  return (
    <div className="flex-col m-3 mt-10">
      <div className="flex gap-96 mb-3">
        {!showAll && <h1 className="ml-1">New Courses</h1>}
        {!showAll && (
          <button
            onClick={handleViewAll}
            className="text-gray-500 ml-56 underline bg-transparent border-none cursor-pointer"
          >
            View All
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {/* Exibir os cursos */}
        {!showAll
          ? visibleCourses.map((course, courseCategory) => (
              <CourseCard
                key={course.id}
                course={course}
                courseCategory={courseCategory}
              />
            ))
          : //interando sobre todas as categorias de cursos
            courses?.map((courseCategory) => (
              <div key={courseCategory.id} className="w-full">
                <h2 className="text-lg font-semibold mt-5 mb-5">
                  {courseCategory.category}
                </h2>
                <div className="flex flex-wrap gap-5">
                  {courseCategory.courses?.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      courseCategory={courseCategory}
                    />
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FlexCards;
