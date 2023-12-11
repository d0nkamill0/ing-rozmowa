import { html, fixture, expect } from "@open-wc/testing";
import "../../app-root";
describe("MyForm", () => {
  it("should create container", async () => {
    const el = await fixture(html`<app-root></app-root> `);
    const container = el.shadowRoot.querySelector(".container");
    expect(container).to.exist;
  });
  it("should render form component", async () => {
    const el = await fixture(html`<app-root></app-root> `);
    const formElement = el.shadowRoot.querySelector("my-form");
    expect(formElement).to.exist;
  });
});
