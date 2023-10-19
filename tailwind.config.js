import typography from '@tailwindcss/typography'
import flowbite from 'flowbite/plugin'

module.exports = {
  content: ['./hugo_stats.json', './node_modules/flowbite/**/*.js'],
  plugins: [typography, flowbite],
}
