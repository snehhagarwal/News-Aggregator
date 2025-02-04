/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-start': 'rgb(2, 0, 36)',
        'custom-mid-1': 'rgba(11, 11, 97, 1)',
        'custom-mid-2': 'rgba(13, 13, 73, 1)',
        'custom-mid-3': 'rgba(13, 13, 85, 1)',
        'custom-end': 'rgba(1, 1, 19, 1)',
      },
      animation: {
        flip: "flip 0.7s ease-in-out", // Flip animation
        pulseCircle: "pulseCircle 1.5s ease-in-out infinite", // Pulsing circle animation
        marquee: "marquee 70s linear infinite", // Marquee animation
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        pulseCircle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
