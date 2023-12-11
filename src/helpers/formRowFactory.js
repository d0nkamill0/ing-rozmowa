import { html } from "@lion/core";
import {
  Checkbox,
  NumberInput,
  RadioGroup,
  Select,
  TextArea,
  TextInput,
} from "../components/FormElements";

export function formRowFactory(name, params, elementRef) {
  return html`
    ${params.type === "text" ? TextInput(name, params) : null}
    ${params.type === "number" ? NumberInput(name, params, elementRef) : null}
    ${params.type === "checkbox" ? Checkbox(name, params, elementRef) : null}
    ${params.type === "textarea" ? TextArea(name, params) : null}
    ${params.type === "select" ? Select(name, params, elementRef) : null}
    ${params.type === "radio-group"
      ? RadioGroup(name, params, elementRef)
      : null}
  `;
}
