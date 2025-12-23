import React from "react";
import { Timetable } from "../components/TimeLine/Timetable";
import timelineJsonEs from '../locales/es.json';
import timelineJsonEn from '../locales/en.json';
import { useLanguage } from '../LanguageContext';

export const Timeline = () => {
  const { lang } = useLanguage(); // 'es' o 'en'

  // Elegimos los textos según el idioma
  const data = lang === "es" ? timelineJsonEs : timelineJsonEn;

  return (
    <div className="container my-5">
      <h1 className="titulos text-center mb-4">{data.timelineSection.title}</h1>
      <p id="timelineParrafo" className="text-center mb-5">
        {data.timelineSection.description}
      </p>
      <Timetable events={data.timetableSection} />
    </div>
  );
};
