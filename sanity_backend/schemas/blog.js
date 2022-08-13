export default {
  name: "blog",
  type: "document",
  title: `Anwit's blog`,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Author",
      name: "author",
      // A reference is a way to point to another document
      type: "reference",
      // This reference is only allowed to point to a document of the type person,
      // we could list more types, but let's keep this simple:
      to: [{ type: "author" }],
    },
    {
      title: "Blog Image",
      name: "blogImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
