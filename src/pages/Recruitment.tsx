import { useLang } from "../hooks/useLang";
import { translations } from "../translations";
import { ClipboardList } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfLteyBmi6GJ67kA4SDXbOrMylFsXS7AQb72nDOixu6-vN33g/viewform?usp=header";

const Recruitment = () => {
  const { lang } = useLang();
  const t = translations[lang];
  usePageMeta(t.pageMeta.recruitment);

  return (
    <section className="min-h-screen md:h-screen md:overflow-hidden bg-quaternary flex flex-col items-center justify-center px-6 md:px-20 py-30">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-4">
              {t.recruitmentTitle}
            </h1>

            <p className="text-base md:text-lg text-tertiary/80 leading-relaxed max-w-md">
              {t.recruitmentDescription}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 bg-primary/5 border-none shadow-md rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shrink-0">
              <ClipboardList className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-heading font-bold text-primary">
              {t.recruitmentSpontaneousTitle}
            </h2>
          </div>

          <div>
            <p className="text-sm md:text-base text-tertiary/70 leading-relaxed">
              {t.recruitmentSpontaneousDescription}
            </p>
          </div>

          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-8 py-3 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-secondary hover:shadow-xl active:scale-95"
          >
            {t.recruitmentCTA}
          </a>
        </div>

      </div>
    </section>
  );
};

export default Recruitment;
