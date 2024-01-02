import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at bottom right, rgba(242, 242, 242, 1) 0%, rgba(0, 0, 0, 1) 85%)',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        'josefinSans': ['Josefin Sans', 'sans-serif'],
        'diphylleia': ['Diphylleia', 'serif']
      },
      gridColumn: {
        'left-xl': '2 / 6',
        'right-xl': '8 / 12',
        'left': '1 / 6',
        'right': '2 / 7',
      }
    },
  },
  plugins: [],
} satisfies Config;
