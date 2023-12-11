import { html, css, LitElement, ScopedElementsMixin } from "@lion/core";
import { Required, Validator } from "@lion/form-core";
import { MaxLength, IsRequired } from "./validators";
import { fetchFormData } from "../server/formApi";
import { makeFormComponent } from './makeFormComponent'
import "@lion/input/define";
import "@lion/select/define";
import "@lion/textarea/define";



export function makeForm(respData) {
  if (typeof respData === "null" || typeof respData === "undefined") {
    return;
  }
  const formElements = Object.entries(respData).map((entry) =>
    makeFormComponent(entry)
  );

  return formElements;
}
