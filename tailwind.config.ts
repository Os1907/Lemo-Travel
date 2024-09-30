import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0057fe",
      },
      fontSize: {
        xs: "12px",
        xxs: "10px",
      },
      animation: {
        float: "float 8s ease-in-out infinite", 
        floatTwo: "float 10s ease-in-out infinite", 
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '50%': {
            transform: 'translateY(-20px) translateX(-5px)',
          },
          '100%': {
            transform: 'translateY(0px) translateX(0px)  ',
          },
        },
        floatTwo: {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '50%': {
            transform: 'translateY(10px) translateX(5px)',
          },
          '100%': {
            transform: 'translateY(0px) translateX(0px)  ',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
