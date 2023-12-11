import { html } from "@lion/core";
import translation from "../../locales/form.json" assert { type: "json" };
import "@lion/checkbox-group/define";

export const Checkbox = (name, params, elementRef) => {
  return html`
    <lion-checkbox
      id=${`checkbox-${name}`}
      name=${name}
      label=${translation[name]}
      @model-value-changed=${() => elementRef.requestUpdate()}
    ></lion-checkbox>
  `;
};
