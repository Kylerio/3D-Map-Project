/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('src/assets/bagus-ghufron-nightjakarta-uMH-d3WWJhM-unsplash.jpg')",
        blackOverlay: "Linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
      },
    },
  },
  plugins: [],
}