import { removeWhiteSpaces } from "../helpers/removeWhiteSpaces";
import { expect } from "@open-wc/testing";

describe("removeWhiteSpaces", () => {
  it("should remove white spaces", async () => {
    const value = ` nationality  ===   'PL'`;
    const result = removeWhiteSpaces(value);
    expect(result).to.equal(`nationality==='PL'`);
  });
});
