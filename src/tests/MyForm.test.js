import { html, fixture, expect } from "@open-wc/testing";
import "../components/my-form.js";
import { responseMock } from "../mocks/responseMock.js";
import { onePageMock, twoPageMock } from "./mocks/myForm.mock.js";
import translation from "../locales/form.json" assert { type: "json" };

async function validateFormControl(value, elementRef) {
  const inputId = Object.keys(onePageMock[0].form)[0];
  const input = elementRef.shadowRoot.querySelector(`#text-input-${inputId}`);
  input.modelValue = value;
  await elementRef.updateComplete;
  const button = elementRef.shadowRoot.querySelector(`#submit-button`);
  button.click();
  await elementRef.updateComplete;

  return elementRef.shadowRoot.querySelector("lion-form");
}

describe("MyForm", () => {
  it("should render form", async () => {
    const el = await fixture(
      html`<my-form .formPages=${responseMock}></my-form> `
    );
    const formElement = el.shadowRoot.querySelector("lion-form");
    expect(formElement).to.exist;
  });

  it("has first page set", async () => {
    const el = await fixture(
      html` <my-form .formPages=${responseMock}></my-form> `
    );
    expect(el.page).to.equal(1);
  });

  describe("validation", () => {
    it("should throw validation error", async () => {
      const el = await fixture(
        html`<my-form .formPages=${onePageMock}></my-form> `
      );
      const tooShortValue = "du";
      const formElement = await validateFormControl(tooShortValue, el);
      expect(formElement.hasFeedbackFor.includes("error")).to.be.true;
    });
    it("should not throw validation error", async () => {
      const el = await fixture(
        html`<my-form .formPages=${onePageMock}></my-form> `
      );
      const acceptableValue = "dupas";
      const formElement = await validateFormControl(acceptableValue, el);
      expect(formElement.hasFeedbackFor.includes("error")).to.be.false;
    });
  });

  describe("navButtons", () => {
    it("should have only previous buttons visible", async () => {
      const el = await fixture(
        html` <my-form .formPages=${twoPageMock}></my-form> `
      );
      const navButtons = el.shadowRoot.querySelector(".nav-buttons");
      const nextButtonClick = navButtons.querySelector("button");
      nextButtonClick.click();
      await el.updateComplete;

      expect(navButtons.textContent).to.include(translation["previousPage"]);
    });
    it("should not have nav buttons if resp has one page", async () => {
      const el = await fixture(
        html` <my-form .formPages=${onePageMock}></my-form> `
      );
      const navButtons = el.shadowRoot.querySelector(".nav-buttons");
      expect(navButtons).not.to.exist;
    });
    it("should have nav buttons if multi page", async () => {
      const el = await fixture(
        html` <my-form .formPages=${twoPageMock}></my-form> `
      );
      const navButtons = el.shadowRoot.querySelector(".nav-buttons");
      expect(navButtons).to.exist;
    });
    it("should have only next button visible", async () => {
      const el = await fixture(
        html` <my-form .formPages=${twoPageMock}></my-form> `
      );
      const navButtons = el.shadowRoot.querySelector(".nav-buttons");
      expect(navButtons.textContent).to.include(translation["nextPage"]);
    });
    it("should have only prev button visible", async () => {
      const el = await fixture(
        html` <my-form .formPages=${twoPageMock}></my-form> `
      );
      const navButtons = el.shadowRoot.querySelector(".nav-buttons");
      expect(navButtons.textContent).to.include(translation["nextPage"]);
    });
  });
});
