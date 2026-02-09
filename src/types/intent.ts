export type UserIntent = "shop" | "academy" | "bespoke";

export interface IntentConfig {
  label: string;
  description: string;
  ctaText: string;
  scrollTarget: string;
}

export const INTENT_CONFIG: Record<UserIntent, IntentConfig> = {
  shop: {
    label: "Shop",
    description: "Explore bridals, ready-to-wear & more",
    ctaText: "Explore the Collection",
    scrollTarget: "shop",
  },
  academy: {
    label: "Academy",
    description: "Learn the art of fashion design",
    ctaText: "Explore the Academy",
    scrollTarget: "academy",
  },
  bespoke: {
    label: "Bespoke",
    description: "Start your custom design journey",
    ctaText: "Start Your Bespoke Journey",
    scrollTarget: "categories",
  },
};
