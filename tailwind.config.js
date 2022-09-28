/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cloud: "url('/assets/img/login-cloud.png')",
      },
      animation: {
        spin: "spin 20s linear infinite",
        spin1: "spin 10s linear infinite",
        spin2: "spin 15s linear infinite",
        spin3: "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
