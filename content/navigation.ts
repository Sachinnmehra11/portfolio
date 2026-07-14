/** Primary navigation model. Homepage section anchors + resume route. */

export type NavItem = {
  label: string;
  href: string;
  /** Section id for scroll-spy (homepage in-page links only). */
  sectionId?: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const resumeNav: NavItem = { label: "Résumé", href: "/resume" };

export default navItems;
