module.exports = {
    theme: {},
    plugins: [require('@tailwindcss/forms'),],
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `composables/**/*.{js,ts}`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`
    ]
}
