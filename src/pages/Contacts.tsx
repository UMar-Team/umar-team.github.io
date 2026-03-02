import { useLang } from "../hooks/useLang";
import { translations } from "../translations";
import { Mail, Instagram, Linkedin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="min-h-screen bg-quaternary md:h-screen md:overflow-hidden px-6 md:px-20 py-12 md:pt-[25vh] max-md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          <div className="flex flex-col justify-center md:sticky md:top-24">
            <h1 className="text-2xl md:text-3xl font-heading font-bold mb-4 md:mb-6 text-primary">
              {t.contactTitle}
            </h1>

            <p className="text-base md:text-lg text-tertiary/80 max-w-md mb-8 md:mb-12 leading-relaxed">
              {t.contactDescription}
            </p>

            <a
              href={`mailto:${t.contactEmail}`}
              className="group rounded-2xl  md:p-8 flex items-start gap-4 md:gap-6 transition-all duration-300 mb-10 md:mb-2"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground group-hover:bg-secondary transition-all duration-300">
                <Mail className="w-7 h-7 md:w-8 md:h-8" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-sm md:text-base font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                  Email
                </h3>
                <p className="text-base md:text-lg font-medium text-primary group-hover:text-secondary transition-colors duration-300 break-all">
                  {t.contactEmail}
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/umar.uminho"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl  md:p-8 flex items-start gap-4 md:gap-6 transition-all duration-300 mb-10 md:mb-2"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground group-hover:bg-secondary transition-all duration-300">
                <Instagram className="w-7 h-7 md:w-8 md:h-8" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-sm md:text-base font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                  Instagram
                </h3>
                <p className="text-base md:text-lg font-medium text-primary group-hover:text-secondary transition-colors duration-300 break-all">
                  umar.uminho
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="group rounded-2xl  md:p-8 flex items-start gap-4 md:gap-6 transition-all duration-300 mb-5"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary text-primary-foreground group-hover:bg-secondary transition-all duration-300">
                <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-sm md:text-base font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                  LinkedIn
                </h3>
                <p className="text-base md:text-lg font-medium text-primary group-hover:text-secondary transition-colors duration-300 break-all">
                  linkedin
                </p>
              </div>
            </a>
          </div>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
