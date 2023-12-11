import { html } from "@lion/core";
import { getValidators } from "../../validation/getValidators";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/radio-group/define";

export const RadioGroup = (name, params, elementRef) => {
  return html`
    <lion-radio-group
      id=${`radio-group-${name}`}
      name=${name}
      label=${translation[name]}
      .validators=${getValidators(translation[name], params.validators)}
    >
      ${params.dataset.map(
        (radio) => html`
          <lion-radio
            label=${radio}
            .choiceValue=${radio}
            @model-value-changed=${() => elementRef.requestUpdate()}
          >
          </lion-radio>
        `
      )}
    </lion-radio-group>
  `;
};
