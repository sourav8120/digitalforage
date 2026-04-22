import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#3b82f6",
        accent: "#f97316",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;





// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     // Add any other folders you have components in
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0f172a",
//         secondary: "#3b82f6",
//         accent: "#f97316",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       animation: {
//         float: "float 6s ease-in-out infinite",
//       },
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;