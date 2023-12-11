import { html, css, LitElement, ScopedElementsMixin } from "@lion/core";
import { MyForm } from "./MyForm";
export class AppRoot extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    "my-form": MyForm,
  };

  render() {
    return html` <my-form></my-form> `;
  }
}
