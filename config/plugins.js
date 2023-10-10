module.exports = {
  attributes: {
    title: {
      type: "string",
      required: true,
    },
    uuid: {
      type: "customField",
      customField: "plugin::field-uuid.uuid",
    },
  },
};
