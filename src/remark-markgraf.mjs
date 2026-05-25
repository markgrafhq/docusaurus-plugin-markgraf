import { visit } from "unist-util-visit";

const importNode = {
  type: "mdxjsEsm",
  value: 'import Markgraf from "@markgrafhq/docusaurus-plugin-markgraf/dist/Markgraf.js";',
  data: {
    estree: {
      type: "Program",
      sourceType: "module",
      body: [
        {
          type: "ImportDeclaration",
          specifiers: [
            {
              type: "ImportDefaultSpecifier",
              local: { type: "Identifier", name: "Markgraf" },
            },
          ],
          source: {
            type: "Literal",
            value: "@markgrafhq/docusaurus-plugin-markgraf/dist/Markgraf.js",
            raw: '"@markgrafhq/docusaurus-plugin-markgraf/dist/Markgraf.js"',
          },
        },
      ],
    },
  },
};

export default function remarkMarkgraf() {
  return (tree) => {
    let needsImport = false;

    visit(tree, "code", (node, index, parent) => {
      if (node.lang !== "markgraf" || !parent || index == null) return;

      needsImport = true;

      const src = node.value;
      parent.children[index] = {
        type: "mdxJsxFlowElement",
        name: "Markgraf",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "src",
            value: src,
          },
        ],
        children: [],
      };
    });

    if (needsImport) tree.children.unshift(importNode);
  };
}
