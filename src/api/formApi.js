import { responseMock } from "../mocks/responseMock.js";
import translation from "../locales/form.json" assert { type: "json" };

export const fetchFormData = async () =>
  Promise.resolve({ data: responseMock });

export const verifyFormData = async (data) => {
  const res = await fetch("http://localhost:9999/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return {
      error: translation["formSaveError"],
    };
  }

  return res.json();
};
