import { useState } from "react";
import InfoSection from "../components/InfoSection";
import MissionValueCard from "../components/MissionValueCard";
import DepartmentSection from "../components/DepartmentSection";
import MemberCard from "../components/MemberCard";
import { Target, Earth, Handshake, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { departments } from "../data/departments";
import type { AboutStringKeys } from "../data/departments";
import { members } from "../data/members";
import { translations } from "../translations";
import { useLang } from "../hooks/useLang";
import { usePageMeta } from "../hooks/usePageMeta";

const About = () => {
  const { lang } = useLang();
  const t = translations[lang].aboutPage;
  const tRoot = translations[lang];
  usePageMeta(tRoot.pageMeta.about);

  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: t.allDepartments },
    ...departments.map((dept) => ({
      id: dept.titleKey,
      label: t[dept.titleKey],
    })),
  ];

  const filteredMembers =
    selectedDept === "all"
      ? members
      : members.filter((m) => m.department === selectedDept);

  return (
    <div className="mt-[10vh]">
      <InfoSection
        subtitle={t.aboutSubtitle}
        title={t.aboutTitle}
        content={t.aboutContent}
        image="/logo.jpeg"
        imagePosition="right"
      />
      <InfoSection
        subtitle={t.competitionSubtitle}
        title={t.competitionTitle}
        content={t.competitionContent}
        ctaButton={{
          text: t.competitionCTA,
          link: "https://portugalboatchallenge.pt/",
          external: true
        }}
        image="/pbc2.png"
        imagePosition="left"
      />

      <section className="py-20 px-5 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-10">
            {t.missionSectionTitle}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <MissionValueCard icon={<Target />} title={t.missionTitle} description={t.mission} variant="highlighted" />
            <MissionValueCard icon={<Earth />} title={t.visionTitle} description={t.vision} />
            <MissionValueCard icon={<Handshake />} title={t.valuesTitle} description={t.values} />
            <MissionValueCard icon={<Rocket />} title={t.goalsTitle} description={t.goals} />
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-quaternary">
        <div className="max-w-6xl mx-auto grid gap-10">
          <h2 className="text-2xl font-bold text-center text-primary">
            {t.departmentsTitle}
          </h2>

          {departments.map((dept, index) => {
            const Icon = dept.icon;

            return (
              <DepartmentSection
                key={index}
                title={t[dept.titleKey]}
                description={t[dept.descriptionKey]}
                icon={<Icon />}
                color={dept.color}
                tags={dept.tags}
              />
            );
          })}
        </div>
      </section>

      <section className="py-20 px-5 bg-primary">
        <div className="max-w-[90vw] mx-auto">

          <h2 className="text-2xl font-bold text-center mb-8 text-primary-foreground">
            {t.teamTitle}
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((option) => {
              const isActive = selectedDept === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedDept(option.id)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-secondary text-primary shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-6">
            {filteredMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                photo={member.photo}
                linkedinUrl={member.linkedinUrl}
                department={t[member.department as AboutStringKeys]}
              />
            ))}
          </div>
        </div>

        <Link to="/recruitment" className="flex justify-center">
          <h1 className="text-xl font-bold text-center mt-20 max-w-[90vw] text-primary shadow-lg
            bg-secondary hover:bg-primary hover:text-secondary transition-all duration-300 py-3 px-20 rounded-full">
            {t.joinCTA}
          </h1>
        </Link>
      </section>

    </div>
  );
};

export default About;