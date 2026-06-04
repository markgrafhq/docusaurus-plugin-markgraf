import remarkMarkgraf from "@markgrafhq/docusaurus-plugin-markgraf/remark";

export default {
  title: "markgraf example",
  url: "https://markgrafhq.github.io",
  baseUrl: "/docusaurus-plugin-markgraf/",
  organizationName: "markgrafhq",
  projectName: "docusaurus-plugin-markgraf",
  onBrokenLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          remarkPlugins: [remarkMarkgraf],
        },
        blog: false,
        theme: { customCss: "./src/custom.css" },
      },
    ],
  ],
  plugins: ["@markgrafhq/docusaurus-plugin-markgraf"],
};
