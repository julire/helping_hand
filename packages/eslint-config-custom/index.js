module.exports = {
  extends: ["plugins:@typescript-eslint/recommended","turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
};
