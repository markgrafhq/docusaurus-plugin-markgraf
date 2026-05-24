import remarkMarkgraf from "./remark-markgraf.mjs";

export { default as Markgraf } from "./Markgraf.js";

export default function pluginMarkgraf() {
  return {
    name: "markgraf-docusaurus",
    configureWebpack() {
      return { resolve: { extensionAlias: { ".js": [".js", ".ts", ".tsx"] } } };
    },
  };
}

export { remarkMarkgraf };
