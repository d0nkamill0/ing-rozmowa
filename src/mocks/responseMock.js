export const responseMock = [
  {
    name: "customer",
    order: 1,
    form: {
      name: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
      surname: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
      nationality: {
        type: "select",
        validators: ["required"],
        dataset: ["PL", "GB", "DE"],
        visibility: "always",
      },
      pesel: {
        type: "number",
        validators: ["required", "len:11"],
        visibility: "nationality === PL",
      },
      vatPayer: {
        type: "checkbox",
        visibility: "always",
      },
      documentType: {
        type: "radio-group",
        dataset: ["Dowód osobisty", "Paszport", "Prawo jazdy"],
        visibility: "always",
        validators: ["required"],
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
      postalCode: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
      street: {
        type: "text",
        validators: ["required", "max-len:20", "min-len:3"],
        visibility: "always",
      },
      houseNumber: {
        type: "number",
        validators: ["required", "min-len:1", "max-len:10"],
        visibility: "always",
      },
      apartmentNumber: {
        type: "text",
        validators: ["min-len:1", "max-len:10"],
        visibility: "always",
      },
    },
  },
  {
    name: "consent",
    order: 3,
    form: {
      marketingConsent: {
        type: "checkbox",
        visibility: "always",
      },
      description: {
        type: "textarea",
        validators: ["required", "max-len:50"],
        visibility: "always",
      },
    },
  },
];
