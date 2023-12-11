import { html } from "@lion/core";
import { getValidators } from "../../validation/getValidators";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/textarea/define";

export const TextArea = (name, params) => {
  return html` <lion-textarea
    id=${`textarea-${name}`}
    name=${name}
    label=${translation[name]}
    .validators=${getValidators(translation[name], params.validators)}
  >
  </lion-textarea>`;
};
