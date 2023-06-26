import { KrFormValidation } from "../KrForm";

export default class KrFormEmailValidation implements KrFormValidation {

    errorText: string = `Пожалуйста, введите E-mail верного формата`;

    isValid(value: string | boolean): boolean
    {
        if(value === undefined || value === null || value === '' || typeof value === 'boolean')
        {
            return true;
        }

        const pattern = /^\w+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,4}$/;
        return value.match(pattern) !== null;
    }

}
