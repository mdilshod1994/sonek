/** общие правила для ts и vue */
const rules = {
  "@typescript-eslint/ban-ts-comment": "off",
  // не заставлять прописывать типы возвращаемых значений функций
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-unused-vars": "warn",
  "prettier/prettier": "warn",
  "simple-import-sort/imports": "warn",
  "simple-import-sort/exports": "warn",
  "import/first": "warn",
  "import/newline-after-import": "warn",
  "import/no-duplicates": "error",
}

module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["import", "simple-import-sort"],
  rules,
  ignorePatterns: ["/.nuxt/", "/.output/"],
  overrides: [
    {
      files: "*.vue",
      extends: ["plugin:vue/vue3-recommended", "@vue/typescript/recommended", "@vue/prettier"],
      rules: {
        ...rules,
        "vue/component-definition-name-casing": ["warn", "kebab-case"],
        "vue/component-name-in-template-casing": [
          "error",
          "kebab-case",
          {
            registeredComponentsOnly: false,
          },
        ],
        "vue/component-tags-order": ["warn", { order: ["script", "template", "style"] }],
        "vue/html-self-closing": [
          "error",
          {
            html: {
              // По идее надо void: never, но это конфликтует с prettier (он для всех элементов добавляет /).
              // Так как у нас не HTML а Vue, будет правильно работать и с always.
              void: "always",
              normal: "always",
              component: "always",
            },
          },
        ],
        // выключаем, потому что и в компонентах, и в страницах реальные name задаются Nuxt'ом и они дают false positive срабатывание ошибки
        "vue/multi-word-component-names": "off",
        "vue/no-template-shadow": "off",
        // с бэка приходит HTML, нужно вставлять его в nuxt-link например
        "vue/no-v-text-v-html-on-component": "off",
        // с бэка приходит HTML
        "vue/no-v-html": "off",
        "vue/require-default-prop": "off",
        "vue/require-v-for-key": "off",
        "vue/padding-line-between-blocks": "warn",
      },
    },
  ],
}
