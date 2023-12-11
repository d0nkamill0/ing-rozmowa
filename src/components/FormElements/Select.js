import { html } from "@lion/core";
import { getValidators } from "../../validation/getValidators";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/select/define";

export const Select = (name, params, elementRef) => {
  return html`
    <lion-select
      id=${`select-${name}`}
      name=${name}
      label=${translation[name]}
      .validators=${getValidators(translation[name], params.validators)}
      @model-value-changed=${() => elementRef.requestUpdate()}
    >
      <select slot="input">
        <option selected hidden value>${translation["chooseValue"]}</option>
        ${params.dataset.map(
          (optionData) => html`
            <option value=${optionData}>${optionData}</option>
          `
        )}
      </select>
    </lion-select>
  `;
};
