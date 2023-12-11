export const onePageMock = [
  {
    name: "customer",
    order: 1,
    form: {
      name: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
    },
  },
];

export const twoPageMock = [
  {
    name: "customer",
    order: 1,
    form: {
      name: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
    },
  },
  {
    name: "address",
    order: 2,
    form: {
      city: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
    },
  },
];
