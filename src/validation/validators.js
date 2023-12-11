import {
  Required,
  MaxNumber,
  MinNumber,
  EqualsLength,
  MinLength,
  MaxLength,
} from "@lion/form-core";
import translation from "../locales/validation.json" assert { type: "json" };

export const validateIsRequired = (name) =>
  new Required(null, {
    getMessage: () =>
      `${translation.isRequired.prefix} ${name} ${translation.isRequired.sufix}`,
  });

export const validateMinLength = (name, value) =>
  new MinLength(value, {
    getMessage: () =>
      `${translation.minLength.prefix} ${name} ${translation.minLength.sufix} ${value}`,
  });

export const validateMaxLength = (name, value) =>
  new MaxLength(value, {
    getMessage: () =>
      `${translation.maxLength.prefix} ${name} ${translation.maxLength.sufix} ${value}`,
  });

export const validateExactLength = (name, value) =>
  new EqualsLength(Number(value), {
    getMessage: () =>
      `${translation.exactLength.prefix} ${name} ${translation.exactLength.sufix} ${value}`,
  });

export const validateMinNumber = (name, value) =>
  new MinNumber(Number(value), {
    getMessage: () =>
      `${translation.minNumber.prefix} ${name} ${translation.minNumber.sufix} ${value}`,
  });

export const validateMaxNumber = (name, value) =>
  new MaxNumber(Number(value), {
    getMessage: () =>
      `${translation.maxNumber.prefix} ${name} ${translation.maxNumber.sufix} ${value}`,
  });
