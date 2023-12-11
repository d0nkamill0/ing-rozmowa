import {
  validateMaxNumber,
  validateExactLength,
  validateMaxLength,
  validateMinLength,
  validateMinNumber,
  validateIsRequired,
} from "./validators";

export const getValidators = (name, validators) =>
  validators?.map((validator) => {
    const splitted = validator.split(":");
    const validationType = splitted[0];
    const validationValue = splitted[1];

    switch (validationType) {
      case "max-len":
        return validateMaxLength(name, validationValue);
      case "min-len":
        return validateMinLength(name, validationValue);
      case "max-number":
        return validateMaxNumber(name, validationValue);
      case "min-number":
        return validateMinNumber(name, validationValue);
      case "len":
        return validateExactLength(name, validationValue);
      case "required":
        return validateIsRequired(name, validationValue);
    }
  });
