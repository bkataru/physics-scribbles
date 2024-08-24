// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the post",
      required: true
    },
    subtitle: {
      type: "string",
      description: "Subtitle of the post",
      required: true
    },
    date: {
      type: "string",
      description: "Date when the post was published",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    // @ts-ignore because of weird type incompatibility
    rehypePlugins: [rehypeKatex]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZBDCC3DI.mjs.map
