import '../index.css';
import homeJsonEs from '../locales/es.json';
import homeJsonEn from '../locales/en.json';
import { useLanguage } from '../LanguageContext';

export const Home = () => {
  const { lang } = useLanguage();
  const home = lang === 'es' ? homeJsonEs.homeSection : homeJsonEn.homeSection;

  return (
    <div id="textoHome">
      <h1 id="eliana">{home.title}</h1>
      <p>{home.p1}</p>
      <p>{home.p2}</p>
      <p>{home.p3}</p>
      <h5 className="mx-auto" id="pensamiento">{home.quote}</h5>
    </div>
  );
};
