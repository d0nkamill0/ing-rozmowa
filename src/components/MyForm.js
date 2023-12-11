import { html, css, LitElement, ScopedElementsMixin } from "@lion/core";
import { Required, Validator } from "@lion/form-core";
import { MaxLength, IsRequired } from "../helpers/validators";
import { fetchFormData } from "../server/formApi";
import "@lion/input/define";
import { makeForm } from "../helpers/makeForm";

export class MyForm extends ScopedElementsMixin(LitElement) {
  constructor() {
    super();
    this.response = [];
  }

  static get properties() {
    return {
      response: Object,
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.response = await fetchFormData();
  }

  submitHandler = (ev) => {
    if (ev.target.hasFeedbackFor.includes("error")) {
      const firstFormElWithError = ev.target.formElements.find((el) =>
        el.hasFeedbackFor.includes("error")
      );
      firstFormElWithError.focus();
      return;
    }
    const formData = ev.target.serializedValue;
    fetch("/api/foo/", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
  submitViaJS = (ev) => {
    // Call submit on the lion-form element, in your own code you should use
    // a selector that's not dependent on DOM structure like this one.
    ev.target.previousElementSibling.submit();
  };

  render() {
    console.log("this.response", this.response);
    // const formPages = this.response?.map((respItem) => makeForm(respItem.form));
    const components = makeForm(this.response[0]?.form);
    console.log('components', components)
    if(!components) {
      return html`brak`
    }
    return html`
      <lion-form @submit=${this.submitHandler}>
        <form @submit=${(ev) => ev.preventDefault()}>
          ${
            components.map(component => html`${component}`)
          }
          <div>
            <button>Submit</button>
            <button
              type="button"
              @click=${(ev) =>
                ev.currentTarget.parentElement.parentElement.parentElement.resetGroup()}
            >
              Reset
            </button>
          </div>
        </form>
      </lion-form>
      <button @click=${this.submitViaJS}>Explicit submit via JavaScript</button>
    `;
  }
}
