import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

/**
 * Updates the document <title> and <meta name="description"> for each page.
 * Call this at the top of every page component.
 */
export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    const siteName = "UMar";
    document.title = title ? `${title} | ${siteName}` : siteName;

    const metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [title, description]);
};
