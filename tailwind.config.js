/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        purple: '#340064',
      },
      dropShadow: {
        clockHand: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        profilePicture: "url('/img/profile_picture.jpg')",
      },
    },
  },
  plugins: [],
};
