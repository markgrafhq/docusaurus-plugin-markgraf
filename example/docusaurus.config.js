import remarkMarkgraf from "@markgrafhq/markgraf-docusaurus/remark";

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
  plugins: ["@markgrafhq/markgraf-docusaurus"],
};
