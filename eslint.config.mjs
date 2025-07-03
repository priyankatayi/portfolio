import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS default settings
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ['plugin:prettier/recommended'],
  },
  // Browser globals (for front-end code)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Add this block for Node files (like tailwind.config.js)
  {
    files: ["tailwind.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
  // React config
  pluginReact.configs.flat.recommended, 
]);
