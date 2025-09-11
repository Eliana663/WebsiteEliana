import { Timetable } from "../components/TimeLine/Timetable";

export const Timeline = () => {
  return (
    <div className="container my-5">
      <h1 className="titulos text-center mb-4">Timeline</h1>
      <p id="timelineParrafo" className="text-center mb-5">
        A continuación, se presenta una cronología detallada de mi formación académica y experiencia profesional:
      </p>
      <Timetable />
    </div>
  );
};