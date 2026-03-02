import React from 'react';

export interface InfoSectionProps {
  title: string;
  subtitle?: string;
  content: string | string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  ctaButton?: {
    text: string;
    link: string;
    external?: boolean;
  };
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  content,
  image,
  imageAlt = 'Section image',
  imagePosition = 'right',
  backgroundColor = 'transparent',
  ctaButton,
}) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-gray-600">
          {paragraph}
        </p>
      ));
    }
    return <p className="text-lg leading-relaxed text-gray-600">{content}</p>;
  };

  return (
    <section className="w-full px-5 py-12" style={{ backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`
            grid gap-16 items-center
            md:grid-cols-2
            ${imagePosition === 'left' ? 'md:[direction:rtl]' : ''}
          `}
        >
          <div className={`
              flex flex-col gap-5
              ${imagePosition === 'left' ? 'md:[direction:ltr]' : ''}
            `}
          >
            {subtitle && (
              <span className="text-sm font-semibold uppercase tracking-[2px] text-[#ff3131]">
                {subtitle}
              </span>
            )}

            <h2 className="text-4xl md:text-[42px] font-bold text-[#001b3d] relative pb-5">
              {title}
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#ff3131]" />
            </h2>

            <div className="flex flex-col gap-4">{renderContent()}</div>

            {ctaButton && (
              <a
                href={ctaButton.link}
                target={ctaButton.external ? '_blank' : '_self'}
                rel={ctaButton.external ? 'noopener noreferrer' : undefined}
                className="
                  inline-flex items-center gap-3
                  bg-[#ff3131] text-white
                  md:px-8 px-3 py-4 rounded-full
                  font-semibold text-base
                  transition-all duration-300
                  shadow-[0_4px_15px_rgba(255,49,49,0.3)]
                  hover:bg-primary
                  hover:shadow-[0_6px_20px_rgba(18,18,18,0.4)]
                  w-fit mt-2 group max-md:self-center
                "
              >
                {ctaButton.text}
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>

          {image && (
            <div className="w-full flex justify-center">
              <div className="
                relative md:w-full w-[400px] h-[400px] max-md:max-w-[80vw] max-md:max-h-[25vh]
                aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden
                shadow-[0_10px_40px_rgba(0,27,61,0.2)]
              ">
                <div className="
                  absolute inset-0 z-10 pointer-events-none
                  bg-gradient-to-br
                  from-[rgba(0,27,61,0.1)]
                  to-[rgba(255,49,49,0.1)]
                " />
                <img
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;