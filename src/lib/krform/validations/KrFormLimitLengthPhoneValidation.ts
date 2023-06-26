import { KrFormValidation } from "../KrForm";

export default class KrFormLimitLengthPhoneValidation implements KrFormValidation {

    constructor(lengthPhone: number)
    {
        this.errorText = `Телефон должен содержать минимум ${lengthPhone} цифр`;
        this.lengthPhone = lengthPhone;
    }

    lengthPhone: number;

    errorText: string;

    isValid(value: string | boolean): boolean
    {
        if(value === undefined || value === null || value === '' || typeof value === 'boolean')
        {
            return true;
        }

        return value.replace(/ /g,'')
            .replace(/\(/g,'')
            .replace(/\)/g,'')
            .replace(/-/g,'')
            .replace(/\+/g,'')
            .length === this.lengthPhone;
    }

}
