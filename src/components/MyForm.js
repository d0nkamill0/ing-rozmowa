import { html, css, LitElement } from "@lion/core";
import { fetchFormData, verifyFormData } from "../api/formApi";
import { formRowFactory } from "../helpers/formRowFactory";
import { removeWhiteSpaces } from "../helpers/removeWhiteSpaces";
import translation from "../locales/form.json" assert { type: "json" };
import "@lion/input/define";
import "@lion/fieldset/define";
import "@lion/button/define";
import "@lion/ui/define/lion-form.js";
export class MyForm extends LitElement {
  constructor() {
    super();
    this.formPages = [];
    this.page = 1;
  }

  static get properties() {
    return {
      formPages: Object,
      page: Number,
      isSubmitted: Boolean,
    };
  }

  static styles = [
    css`
      .success-message {
        margin-top: 1rem;
        border-radius: 5px;
        text-align: center;
        background-color: greenyellow;
        padding: 0.5rem;
      }
      .form-row {
        margin-bottom: 1rem;
      }
      .form-buttons {
        margin-top: 1rem;
      }
      .nav-buttons {
        margin-bottom: 0.5rem;
      }
      .visible {
        display: grid;
        gap: 0.5rem;
      }
      .hidden {
        display: none;
      }
    `,
  ];

  handleSaveSuccess() {
    this.isSubmitted = true;
    const submitButton = this.shadowRoot.querySelector("#submit-button");
    const form = this.shadowRoot.querySelector("#form");
    form.disabled = true;
    submitButton.disabled = true;
  }

  goToFirstUnmarked(e) {
    const firstFormElWithError = e.target.formElements.find((e) =>
      e.hasFeedbackFor.includes("error")
    );
    const firstPageWithError = this.formPages.find(
      (page) => firstFormElWithError.name in page.form
    );
    this.page = firstPageWithError.order;
    firstFormElWithError.focus();
  }

  submitHandler = async (e) => {
    if (e.target.hasFeedbackFor.includes("error")) {
      this.goToFirstUnmarked(e);
      return;
    }
    const formData = e.target.serializedValue;
    const res = await verifyFormData(formData);
    if (res.isSubmitted) {
      this.handleSaveSuccess();
    }
  };

  goToPreviousPage() {
    this.page = this.page - 1;
  }

  goToNextPage() {
    this.page = this.page + 1;
  }

  isHidden = (visibility) => {
    if (visibility === "always") {
      return false;
    }
    const splitted = removeWhiteSpaces(visibility).split("===");
    const form = this.shadowRoot.querySelector("#form");
    if (form && form.modelValue[splitted[0]] === splitted[1]) {
      return false;
    }
    return true;
  };

  resetForm(e) {
    e.currentTarget.parentElement.parentElement.parentElement.resetGroup();
  }

  renderRows(form) {
    return Object.entries(form).map(([name, params]) => {
      if (this.isHidden(params.visibility)) {
        return null;
      }

      return formRowFactory(name, params, this);
    });
  }

  renderPages() {
    return this.formPages.map((page) => {
      return html`
        <div class="${page.order === this.page ? "visible" : "hidden"}">
          <h3>${translation[page.name]}</h3>
          ${this.renderRows(page.form)}
        </div>
      `;
    });
  }

  renderNavButton() {
    if (this.formPages.length === 1) {
      return;
    }

    return html`
      <div class="nav-buttons">
        ${this.page === 1
          ? null
          : html`<button @click=${this.goToPreviousPage}>
              ${translation["previousPage"]}
            </button>`}
        ${this.page === this.formPages.length
          ? null
          : html`<button @click=${this.goToNextPage}>
              ${translation["nextPage"]}
            </button>`}
      </div>
    `;
  }

  render() {
    return html`
      ${this.renderNavButton()}
      <lion-form id="form" @submit=${this.submitHandler}>
        <form @submit=${(e) => e.preventDefault()}>
          ${this.renderPages()}
          <div class="form-buttons">
            <button id="submit-button">${translation["submit"]}</button>
            <button @click=${this.resetForm}>${translation["reset"]}</button>
          </div>
        </form>
      </lion-form>
      ${this.isSubmitted
        ? html`<div class="success-message">${translation["formSaved"]}</div>`
        : null}
    `;
  }
}
