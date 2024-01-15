import type { Config } from 'tailwindcss';
import daysiui from 'daisyui';

const config: Config = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  plugins: [daysiui],
};
export default config;
