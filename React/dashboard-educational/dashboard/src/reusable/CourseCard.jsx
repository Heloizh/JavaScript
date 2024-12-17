import useFetch from "../hooks/useFetch";

// eslint-disable-next-line react/prop-types
const CourseCard = ({ course, courseCategory }) => {

  // Estração dos icons em server.js
  const icon = courseCategory?.icon || "public/iconStar.png";

  // função de background para icons
  function getIsconStyles(icon) {
    switch (icon) {
      case "public/iconMath.png":
        return { bgColor: "bg-background-icon-primaryColor" };
      case "public/iconBiology.png":
        return { bgColor: "bg-background-icon-secondColor" };
      case "public/iconHistory.png":
        return { bgColor: "bg-background-icon-thirdColor" };
      case "public/iconAtom.png":
        return { bgColor: "bg-background-icon-fourthColor" };
      case "public/iconStar.png":
        return { bgColor: "bg-background-icon-fifthColor" };
      default:
        return { bgColor: "" };
    }
  }

  //função para renderizar icons
  function filterBackgroundIcon(icon) {
    const { bgColor } = getIsconStyles(icon);

    return (
      <div
        className={`${bgColor} p-2 rounded-full w-16 h-12 flex justify-center items-center`}
      >
        <img src={icon} alt="icone" className="w-6 h-6" />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white w-64 h-48 rounded-3xl shadow-xl p-6 cursor-pointer hover:opacity-70">
        <div>
          <div className="flex gap-1">
            {filterBackgroundIcon(icon)}
            <div className=" w-full p-1">
              <h5 className="text-sm absolute font-medium">{course?.title}</h5>
              <div className="subtitles-style gap-2 translate-y-6">
                <h6>{course.lessons}</h6>
                <h6>Lessons</h6>
              </div>
            </div>
          </div>
          <div className="flex gap-12 mt-10 ml-2">
            <div className="">
              <h6 className="subtitles-style mb-2">Rate</h6>
              <div className="flex gap-2">
                <span className="-mt-1">⭐</span>
                <h4 className="font-medium text-sm">{course.Rate}</h4>
              </div>
            </div>
            <div className="w-full">
              <h6 className="subtitles-style">Type</h6>
              <h5 className="font-medium text-sm">{course?.Type}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
