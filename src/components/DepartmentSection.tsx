export type DepartmentColor = "blue" | "red" | "dark";
export interface DepartmentSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: DepartmentColor;
  tags?: string[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  title,
  description,
  icon,
  color,
  tags = [],
}) => {
  const colorMap: Record<string, { bg: string; text: string; tagBg: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-800', tagBg: 'bg-blue-200' },
    red: { bg: 'bg-red-100', text: 'text-red-800', tagBg: 'bg-red-200' },
    dark: { bg: 'bg-gray-200', text: 'text-gray-800', tagBg: 'bg-gray-400' },
  };

  const colors = colorMap[color] || colorMap.dark;

  return (
    <section className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm group">
      <div className={`${colors.bg} ${colors.text} p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4`}>
        <div className="flex items-center gap-4">
          <div className="group-hover:animate-spin min-w-12 md:w-12 h-12 flex items-center justify-center rounded-full bg-white text-lg md:text-2xl">
            {icon}
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <p className="text-sm md:text-base mt-1">{description}</p>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`${colors.tagBg} ${colors.text} text-xs md:text-sm px-3 py-1 rounded-full shadow-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DepartmentSection;