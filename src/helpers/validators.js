import { Validator, Required } from "@lion/form-core";

const DEFAULT_MAX_LENGTH = 15;

export function IsRequired() {
    return new Required(null, { getMessage: () => 'Pole nie moze byc puste' })
}

export class MaxLength extends Validator {
  constructor(maxLength = DEFAULT_MAX_LENGTH) {
    super();
    this.maxLength = maxLength;
  }

  static get validatorName() {
    return "maxLengthValidator";
  }

  static async getMessage() {
    return `Wartość pola nie osiągnęła minimalnej ilości znaków. Maksymalna długość to ${this.maxLength}`;
  }

  execute(value) {
    console.log("MaxLength", value, this.maxLength);
    return value.length < this.maxLength;
  }
}
