import remarkMarkgraf from "@markgrafhq/docusaurus-plugin-markgraf/remark";

export default {
  title: "markgraf example",
  url: "https://example.com",
  baseUrl: "/",
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          remarkPlugins: [remarkMarkgraf],
        },
        blog: false,
        theme: { customCss: "./src/custom.css" },
      },
    ],
  ],
  plugins: ["@markgrafhq/docusaurus-plugin-markgraf"],
};
