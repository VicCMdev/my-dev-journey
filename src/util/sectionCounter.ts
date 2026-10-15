import { isFlagEnabled, type FlagName } from "@config/flags";

export type NavSectionId = "about" | "experience" | "projects" | "contact";

type NavSectionDef = {
  id: NavSectionId;
  href: string;
  label: string;
  flag?: FlagName;
};

const NAV_SECTIONS: NavSectionDef[] = [
  { id: "about", href: "/home#about", label: "About" },
  { id: "experience", href: "/home#experience", label: "Experience" },
  { id: "projects", href: "/projects", label: "Projects", flag: "projects" },
  { id: "contact", href: "/contact", label: "Contact", flag: "contact" },
];

export type NumberedNavSection = NavSectionDef & { index: string };

/** Nav items that are on after this build, numbered 01, 02, 03… with no gaps. */
export function getNavSections(): NumberedNavSection[] {
  return NAV_SECTIONS.filter((section) => !section.flag || isFlagEnabled(section.flag)).map(
    (section, i) => ({
      ...section,
      index: String(i + 1).padStart(2, "0"),
    }),
  );
}

export function getSectionIndex(id: NavSectionId): string | undefined {
  return getNavSections().find((section) => section.id === id)?.index;
}
