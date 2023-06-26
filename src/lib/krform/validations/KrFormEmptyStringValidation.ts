import { KrFormValidation } from "../KrForm";

export default class KrFormEmptyStringValidation implements KrFormValidation {

    constructor(name: string)
    {
        this.errorText = `Поле "${name}" обязательно для заполнения`;
    }

    errorText: string;

    isValid(value: string | boolean): boolean
    {
        return value !== null && value !== undefined && value !== '';
    }

}
