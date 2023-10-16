/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  plugins: ['prettier-plugin-go-template', 'prettier-plugin-tailwindcss'],
}

module.exports = config

