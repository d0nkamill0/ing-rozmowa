import { html } from "@lion/core";
import { getValidators } from "../../validation/getValidators";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/input-amount/define";

export const NumberInput = (name, params, elementRef) => {
  return html`
    <lion-input
      id=${`number-input-${name}`}
      name=${name}
      label=${translation[name]}
      type="number"
      .validators=${getValidators(translation[name], params.validators)}
      @model-value-changed=${() => elementRef.requestUpdate()}
    ></lion-input>
  `;
};
