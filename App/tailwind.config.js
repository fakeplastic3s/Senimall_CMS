/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        unica: "unica",
        franklin: ["franklin"],
        nunito: "Nunito",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
