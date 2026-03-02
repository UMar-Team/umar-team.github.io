import { Linkedin } from 'lucide-react';
import React from 'react';

export interface MemberCardProps {
  name: string;
  photo: string;
  linkedinUrl?: string;
  role?: string;
  department?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  photo,
  linkedinUrl,
  role,
  department,
}) => {
  const hasLinkedin = Boolean(linkedinUrl);

  const Wrapper: React.ElementType = hasLinkedin ? 'a' : 'div';

  return (
    <section>
      <Wrapper
        {...(hasLinkedin && {
          href: linkedinUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        className={`
          flex flex-col items-center rounded-2xl bg-white shadow-md 
          transition-transform duration-300 w-full h-full max-w-xs mx-auto
          ${hasLinkedin ? 'group cursor-pointer' : ''}
        `}
      >
        <div className="p-5 w-full">
          <div className="relative w-full overflow-hidden rounded-2xl aspect-square">
            <img
              src={photo}
              alt={name}
              className={`
                w-full h-full object-cover transition-transform duration-300 
              `}
            />

            {hasLinkedin && (
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-500">
                <Linkedin className="text-white w-10 h-10" />
              </div>
            )}
          </div>
        </div>

        <div className="p-4 text-center flex flex-col gap-1 mt-auto">
          <h3 className="text-lg font-bold text-[#001b3d]">{name}</h3>
          {role && (
            <p className="text-sm font-medium text-[#ff3131] uppercase">
              {role}
            </p>
          )}
          {department && (
            <p className="text-sm text-gray-600">{department}</p>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default MemberCard;