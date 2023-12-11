import { html } from "@lion/core";
import { getValidators } from "../../validation/getValidators";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/input/define";

export const TextInput = (name, params) => {
  return html`
    <lion-input
      id=${`text-input-${name}`}
      name=${name}
      label=${translation[name]}
      type="text"
      .validators=${getValidators(translation[name], params.validators)}
    ></lion-input>
  `;
};
