/**
 * Minimal className combiner — filters falsy values and joins with spaces.
 * Kept dependency-free (no clsx/tailwind-merge needed for this project's scope).
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
