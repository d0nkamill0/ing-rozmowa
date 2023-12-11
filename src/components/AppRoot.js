import { html, css, LitElement, ScopedElementsMixin } from "@lion/core";
import { MyForm } from "./MyForm";
import { fetchFormData } from "../api/formApi";

export class AppRoot extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    "my-form": MyForm,
  };
  static styles = [
    css`
      .container {
        padding: 1rem 16%;
      }
    `,
  ];

  static get properties() {
    return {
      response: Object,
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    this.response = await fetchFormData();
  }

  render() {
    if (!this.response) {
      return;
    }

    return html`
      <div class="container">
        <my-form .formPages=${this.response.data}></my-form>
      </div>
    `;
  }
}
