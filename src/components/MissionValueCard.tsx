import React from 'react';

export interface MissionValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'highlighted';
}

const MissionValueCard: React.FC<MissionValueCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
}) => {
  const isHighlighted = variant === 'highlighted';

  return (
    <section
      className={`
        relative overflow-hidden
        flex flex-col items-center md:gap-5
        text-center
        rounded-2xl
        transition-all duration-300
        border-2 border-transparent
        group

        ${isHighlighted
          ? 'bg-gradient-to-br from-[#001b3d] to-[#003366] text-tertiary'
          : 'bg-gradient-to-br from-white to-gray-50 text-quaternary'
        }

        px-8 py-2 md:px-6 md:py-8
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        hover:border-[#ff3131]
        hover:shadow-[0_12px_40px_rgba(255,49,49,0.15)]
      `}
    >
      <div className="
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r from-[#001b3d] to-[#ff3131]
        scale-x-0 group-hover:scale-x-100
        transition-transform duration-300
        origin-left
      " />

      <div
        className={`
          mt-5 mb-5
          w-[50px] h-[50px] md:w-[70px] md:h-[70px]
          rounded-full
          flex items-center justify-center
          transition-all duration-300
          shadow-[0_4px_15px_rgba(0,27,61,0.2)]
          group-hover:scale-110 group-hover:rotate-6
          ${isHighlighted
            ? 'bg-[#ff3131]'
            : 'bg-gradient-to-br from-[#001b3d] to-[#003366]'
          }
          group-hover:shadow-[0_6px_20px_rgba(255,49,49,0.3)]
        `}
      >
        <span className="text-[36px] md:text-[32px] block">
          {icon}
        </span>
      </div>

      <h3
        className={`
          font-bold text-2xl md:text-xl transition-colors duration-300
          ${isHighlighted ? 'text-white' : 'text-[#001b3d]'}
        `}
      >
        {title}
      </h3>

      <p
        className={`
          text-base md:text-sm leading-relaxed transition-colors duration-300 mb-5
          ${isHighlighted ? 'text-white/90' : 'text-gray-600'}
        `}
      >
        {description}
      </p>
    </section>
  );
};

export default MissionValueCard;