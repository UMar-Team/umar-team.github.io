import { useLang } from "../hooks/useLang";
import { translations } from "../translations";

const Recruitment = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="h-screen md:overflow-hidden bg-quaternary flex flex-col items-center justify-center py-12 px-6 md:px-20 min-h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
          {t.recruitment}
        </h1>
        <p className="text-base md:text-lg text-tertiary/80 leading-relaxed mb-6 max-w-xl mx-auto max-md:px-4">
          {t.recruitmentDescription}
        </p>
      </div>
    </section>
  );
};

export default Recruitment;
