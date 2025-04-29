// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // ** Step 1: Ensure 'content' includes your pages and components **
  content: [
    "./index.html", // If you have one at the root
    "./src/**/*.{js,ts,jsx,tsx}", // Include everything under src
    // Or be more specific:
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
    // "./src/App.tsx", // If you still use it for layout
    // "./src/main.tsx",
  ],

  // ** Step 2: Safelist the specific dynamic classes **
  safelist: [
    // Add all possible generated classes for the country colors here
    'text-red-700',
    'bg-red-100',
    'text-blue-700',
    'bg-blue-100',
    'text-yellow-700',
    'bg-yellow-100',
    'text-indigo-700',
    'bg-indigo-100',
    'text-gray-700', // Default color
    'bg-gray-100',  // Default color
    // You can also use patterns, but be careful as they can include too much:
    // {
    //   pattern: /bg-(red|blue|yellow|indigo|gray)-(100)/,
    // },
    // {
    //   pattern: /text-(red|blue|yellow|indigo|gray)-(700)/,
    // },
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}