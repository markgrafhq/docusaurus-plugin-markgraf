# @markgrafhq/docusaurus-plugin-markgraf

Docusaurus plugin + component for embedding [markgraf](https://github.com/markgrafhq) animations.

## Install

```bash
npm install @markgrafhq/docusaurus-plugin-markgraf @markgrafhq/markgraf-react
```

## Configure

```js
// docusaurus.config.js
import remarkMarkgraf from "@markgrafhq/docusaurus-plugin-markgraf/remark";

export default {
  presets: [
    [
      "classic",
      {
        docs: { remarkPlugins: [remarkMarkgraf] },
        blog: { remarkPlugins: [remarkMarkgraf] },
      },
    ],
  ],
  plugins: ["@markgrafhq/docusaurus-plugin-markgraf"],
};
```

Then add the CSS in your custom CSS entry:

```css
@import "@markgrafhq/markgraf-react/dist/markgraf-react.css";
```

## Use

Fenced code blocks with the `markgraf` language render as live players:

````markdown
```markgraf
seed 1
frame v1 {
  +node client "Client"
  +node api    "API"
  +edge client api
  client -> api "GET /user/42"
}
```
````

Or use the component directly in MDX:

```mdx
import { Markgraf } from "@markgrafhq/docusaurus-plugin-markgraf";

<Markgraf src={`seed 1\nframe v1 { +node a "A" }`} />
```
