import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation();

  useEffect(() => {
    //if (window.innerWidth < 768) return;

    const initSections = () => {
      const sections = document.querySelectorAll<HTMLElement>('section');

      sections.forEach((section, index) => {
        if (index == 0) {
          section.classList.remove('opacity-100');
          section.classList.add('opacity-0', 'transition-all', 'duration-250');
        }
        else {
          section.classList.remove('translate-y-0', 'opacity-100');
          section.classList.add(
            'transform',
            'translate-y-10',
            'opacity-0',
            'transition-all',
            'duration-500'
          );
          section.style.transitionDelay = `${(index - index + 1) * 0.1}s`;
        }
      });

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('translate-y-0', 'opacity-100');
              entry.target.classList.remove('translate-y-10', 'opacity-0');
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach(section => observer.observe(section));

      return observer;
    };

    let observer: IntersectionObserver | null = initSections();

    const mutationObserver = new MutationObserver(() => {
      if (observer) observer.disconnect();
      observer = initSections();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      if (observer) {
        document.querySelectorAll<HTMLElement>('section').forEach(s => observer!.unobserve(s));
        observer.disconnect();
      }
    };
  }, [location]);
};