import { Cog, Zap, Megaphone } from "lucide-react";
import { translations } from "../translations";

type AboutPage = typeof translations.pt.aboutPage;

export type AboutStringKeys = {
  [K in keyof AboutPage]: AboutPage[K] extends string ? K : never;
}[keyof AboutPage];

export type DepartmentColor = "blue" | "red" | "dark";

interface Department {
  titleKey: AboutStringKeys;
  descriptionKey: AboutStringKeys;
  icon: any;
  color: DepartmentColor;
  tags?: string[];
}

export const departments: Department[] = [
  {
    titleKey: "mechanicalTitle",
    descriptionKey: "mechanicalDescription",
    icon: Cog,
    color: "blue",
  },
  {
    titleKey: "electronicsTitle",
    descriptionKey: "electronicsDescription",
    icon: Zap,
    color: "red",
  },
  {
    titleKey: "marketingTitle",
    descriptionKey: "marketingDescription",
    icon: Megaphone,
    color: "dark",
  }
];