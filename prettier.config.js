/**
 * @type {import('prettier').Options}
 */
export default {
  semi: false,
  printWidth: 100,
  // https://github.com/prettier/prettier/issues/5322#issuecomment-1276302630
  // @ts-ignore
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
}
