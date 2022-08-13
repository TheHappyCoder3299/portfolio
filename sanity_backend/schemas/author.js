export default {
  name: "author",
  type: "document",
  title: `Author`,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
