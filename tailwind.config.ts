import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        mozilla: ["Mozilla Headline", "sans-serif"],
        grypen: ["'Qwitcher Grypen'", "cursive"],
        smooch: ["'Smooch Sans'", "sans-serif"],
      },

      spacing: {
        "120": "42rem",
      },
    },
  },
  plugins: [],
};
export default config;
