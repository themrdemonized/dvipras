

export interface KrFormValidation
{
     errorText: string;
     isValid: (value: string | boolean) => boolean;
}

interface KrFormError {
    validation: KrFormValidation;
}

class KrInputForm
{
    public value: string | boolean = '';
    public defaultValue: string = '';
    public errors: Array<KrFormError> = [];
    public validations: Array<KrFormValidation> = [];
    public type: object = String;
}

interface InputFormMap {
    [name: string]: KrInputForm;
}

export default class KrForm
{
    data: InputFormMap;
    storagePrefix: string;

    constructor(storagePrefix: string, data: InputFormMap)
    {
        this.data = data;
        this.storagePrefix = storagePrefix;

        this.initializeFromStorage();
    }

    public initializeFromStorage()
    {
        for(let name in this.data)
        {
            const value = localStorage.getItem(this.storagePrefix + name);

            if(value)
            {
                let inputForm = this.data[name];

                if(inputForm.type === Boolean)
                {
                    inputForm.value = (value === 'true');
                }
                else
                {
                    inputForm.value = value;
                }
            }
        }
    }

    public isValidForm()
    {
        let valid: boolean = true;

        for(let name in this.data)
        {
            let inputForm = this.data[name];

            if(inputForm.validations)
            {
                inputForm.errors = [];

                for(let validation of inputForm.validations)
                {
                    if(!validation.isValid(inputForm.value))
                    {
                        inputForm.errors.push({
                            validation: validation
                        });
                        valid = false;
                    }
                }
            }
        }

        return valid;
    }

    public trySetInput(name: string, value: string | boolean)
    {
        let inputForm = this.data[name];

        inputForm.value = value;

        for(let i=0;i<inputForm.errors.length;i++)
        {
            const error = inputForm.errors[i];

            if(error.validation.isValid(value))
            {
                inputForm.errors.splice(i, 1);
                i--;
            }
        }

        localStorage.setItem(this.storagePrefix + name, value.toString());
    }

    public clearFormDataFromLocalStorage()
    {
        for(let name in this.data)
        {
            localStorage.removeItem(this.storagePrefix + name);
        }
    }

    public setDefaultValues()
    {
        for(let name in this.data)
        {
            const inputForm = this.data[name];
            inputForm.value = inputForm.defaultValue;
        }
    }
}
