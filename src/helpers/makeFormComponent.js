import { html, css, LitElement, ScopedElementsMixin } from "@lion/core";
import { Required, Validator } from "@lion/form-core";
import { MaxLength, IsRequired } from "./validators";
import { fetchFormData } from "../server/formApi";
import "@lion/input/define";
import "@lion/select/define";
import "@lion/textarea/define";

const validators = [IsRequired()];

export function makeFormComponent(entry) {
  const name = entry[0];
  const value = entry[1];

  switch (value.type) {
    case "text":
      return html` <lion-input
        name=${name}
        label=${name}
        .validators=${validators}
      ></lion-input>`;
    case "number":
      return html` <lion-input
        name=${name}
        label=${name}
        .validators=${validators}
      ></lion-input>`;
    case "select":
      return html` <lion-select
        name=${name}
        label=${name}
        .validators=${validators}
      >
        <select slot="input">
          <option selected hidden value>Select value</option>
          ${value.dataset.map(
            (optionData) => html`
              <option value=${optionData}>${optionData}</option>
            `
          )}
        </select>
      </lion-select>`;
    case "textarea":
      return html` <lion-textarea
        name=${name}
        label=${name}
        .validators=${validators}
        max-rows="4"
      >
      </lion-textarea>`;
    default:
      return html`<lion-input
        name=${name}
        label="Last Name"
        .validators=${validators}
      ></lion-input>`;
  }
}
