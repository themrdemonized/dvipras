<style scoped lang="scss">
    

    .v-input-form
    {
        width: auto;
    }

    .v-send-button
    {
        text-align: center;
        margin: 0 auto;
    }

    .v-send-text
    {
        width: 200px;
    }

    .v-no-break
    {
        white-space: nowrap;
    }

    .v-sub-title
    {
        text-align: left;
        margin-bottom: 16px;
        color: var(--kr-color-layout-black-metallic);
    }

    @media (max-width: 680px)
    {
        .v-send-button
        {
            width: 100%;
        }

        .v-send-text
        {
            width: unset;
        }
    }
</style>

<template>
    <simple-form-group-fragment>
        <simple-form-row-group-fragment>
            <kr-form-default-input-component class="v-input-form"
                                             :krForm="krForm"
                                             :krFormData="requestData"
                                             field="name"
                                             name="name"
                                             autocomplete="name"
            >Ваше ФИО</kr-form-default-input-component>
            <simple-form-kr-form-errors-fragment
                    :data="requestData"
                    :fields="[ 'name' ]"
            />
        </simple-form-row-group-fragment>

        <simple-form-row-group-fragment>
            <simple-form-row-double-fragment>
                <kr-form-default-input-component class="v-input-form"
                                                 :krForm="krForm"
                                                 :krFormData="requestData"
                                                 field="phoneNumber"
                                                 type="tel"
                                                 name="tel"
                                                 autocomplete="tel"

                                                 :imask-options="phoneMask"
                >Телефон</kr-form-default-input-component>

                <kr-form-default-input-component class="v-input-form"
                                                 :krForm="krForm"
                                                 :krFormData="requestData"
                                                 field="email"
                                                 type="email"
                                                 name="email"
                                                 autocomplete="email"

                >E-mail</kr-form-default-input-component>
            </simple-form-row-double-fragment>

            <simple-form-kr-form-errors-fragment
                    :data="requestData"
                    :fields="[ 'phoneNumber', 'email' ]"
            />
        </simple-form-row-group-fragment>
    </simple-form-group-fragment>

    <simple-form-group-fragment>
        <simple-form-row-group-fragment>
            <kr-form-default-input-component class="v-input-form"
                                             :krForm="krForm"
                                             :krFormData="requestData"
                                             field="company"
                                             name="company"
                                             autocomplete="company"
            >Ваша организация</kr-form-default-input-component>
            <simple-form-kr-form-errors-fragment
                    :data="requestData"
                    :fields="[ 'company' ]"
            />
        </simple-form-row-group-fragment>
    </simple-form-group-fragment>

    <simple-form-group-fragment>
        <simple-form-row-group-fragment>
            <kr-form-default-text-area-component class="v-input-form"
                                             :krForm="krForm"
                                             :krFormData="requestData"
                                             field="comment"
                                             name="comment"
                                             autocomplete="comment"
            >Примечание</kr-form-default-text-area-component>
            <simple-form-kr-form-errors-fragment
                    :data="requestData"
                    :fields="[ 'comment' ]"
            />
        </simple-form-row-group-fragment>
    </simple-form-group-fragment>

    <simple-form-group-fragment>
        <default-checkbox-component
                :checked="requestData.agreeProcess.value"
                @change="krForm.trySetInput('agreeProcess', $event)"
                :is-error="requestData.agreeProcess.errors.length > 0" class="kr-font-m-body-2">Даю согласие на обработку моих <a href="https://docs.google.com/document/d/1Hqe8QYaGcOdDcSxt4etVNzHOoUGhn00H/edit" target="_blank" rel="noopener noreferrer" @click="krForm.trySetInput('agreeProcess', !requestData.agreeProcess.value)" class="v-no-break kr-font-m-body-2">персональных данных</a></default-checkbox-component>
        <simple-form-kr-form-errors-fragment
                :data="requestData"
                :fields="[ `agreeProcess` ]"
        />
    </simple-form-group-fragment>

    <simple-form-group-fragment>
        <p>Скачать <a href="/Шаблон заявки АНО ДПО ДВИПРАЗ.doc" target="_blank" rel="noopener noreferrer">шаблон заявки на обучение</a></p>
    </simple-form-group-fragment>

    <flex-button-component @action="send" class="v-send-button" mode="text-only">
        <template v-slot:text>
            <div class="v-send-text">Отправить</div>
        </template>
    </flex-button-component>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import CloseButtonComponent from '../CloseButtonComponent';
    import RandomLoaderSpinnerComponent from '../RandomLoaderSpinnerComponent';

    import ModalClosableTitledComponent from '../ModalClosableTitledComponent';

    import imaskRussianPhoneMask from '../../lib/imask/russian_phone_mask';

    import DefaultInputComponent from "../DefaultInputComponent";

    import DefaultTextAreaComponent from '../DefaultTextAreaComponent';

    import FlexButtonComponent from '../FlexButtonComponent';

    import DefaultCheckboxComponent from '../DefaultCheckboxComponent';

    import TradeRequestsManager from "../../lib/trade/TradeRequestsManager";

    import IconSuccessComponent from "../icons/IconSuccessComponent";

    import KrForm from "../../lib/krform/KrForm";
    import KrFormEmptyStringValidation from "@/lib/krform/validations/KrFormEmptyStringValidation";
    import KrFormLimitLengthPhoneValidation from "@/lib/krform/validations/KrFormLimitLengthPhoneValidation";
    import KrFormEmailValidation from "@/lib/krform/validations/KrFormEmailValidation";

    import KrFormDefaultInputComponent from '../forms/krform_simple/KrFormDefaultInputComponent';
    import KrFormDefaultTextAreaComponent from '../forms/krform_simple/KrFormDefaultTextAreaComponent';

    import SuccessModalBodyComponent from "../modal_bodys/SuccessModalBodyComponent";

    import 'imask/esm/masked/number';
    import SimpleFormGroupFragment from "@/components/forms/simple_fragments/SimpleFormGroupFragment";
    import SimpleFormRowGroupFragment from "@/components/forms/simple_fragments/SimpleFormRowGroupFragment";
    import SimpleFormRowTripleFragment from "@/components/forms/simple_fragments/SimpleFormRowTripleFragment";
    import SimpleFormRowDoubleFragment from "@/components/forms/simple_fragments/SimpleFormRowDoubleFragment";
    import SimpleFormRowDoubleSecondLongFragment
        from "@/components/forms/simple_fragments/SimpleFormRowDoubleSecondLongFragment";
    import SimpleFormKrFormErrorsFragment from "@/components/forms/simple_fragments/SimpleFormKrFormErrorsFragment";

    const Component = Options;
    @Component({
        components: {
            SimpleFormKrFormErrorsFragment,
            SimpleFormRowDoubleSecondLongFragment,
            SimpleFormRowDoubleFragment,
            SimpleFormRowTripleFragment,
            SimpleFormRowGroupFragment,
            SimpleFormGroupFragment,
            DefaultTextAreaComponent,
            CloseButtonComponent,
            DefaultInputComponent,
            FlexButtonComponent,
            DefaultCheckboxComponent,
            IconSuccessComponent,
            RandomLoaderSpinnerComponent,
            ModalClosableTitledComponent,
            KrFormDefaultInputComponent,
            KrFormDefaultTextAreaComponent,
            SuccessModalBodyComponent
        },
        props: {
            isOpened: Boolean
        },
        watch: {
            isOpened: function(newVal) {
                if(newVal)
                {
                    this.krForm.initializeFromStorage();
                }
            }
        },
        emits: ['start-process', 'success-process']
    })
    export default class MetersDataBodyComponent extends Vue
    {
        requestData = {
            name: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Ваше ФИО')
                ],
                type: String
            },
            phoneNumber: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Телефон'),
                    new KrFormLimitLengthPhoneValidation(11)
                ],
                type: String
            },
            email: {
                value: '',
                errors: [],
                defaultValue: '',
                validations: [
                    new KrFormEmailValidation()
                ],
                type: String
            },
            company: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Ваша организация')
                ],
                type: String
            },
            comment: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    
                ],
                type: String
            },
            
            agreeProcess: {
                value: false,
                defaultValue: false,
                errors: [],
                validations: [
                    {
                        errorText: 'Согласие необходимо для отправки заявки',
                        isValid: function (value) {
                            return value;
                        }
                    }
                ],
                type: Boolean
            }
        }

        krForm = new KrForm('requestModalForm-', this.requestData);

        async send()
        {
            if(!this.krForm.isValidForm())
            {
                return;
            }

            this.$emit('start-process');

            let description =
`ФИО: ${this.requestData.name.value}
Телефон: ${this.requestData.phoneNumber.value}
E-mail: ${this.requestData.email.value}
Организация: ${this.requestData.company.value}
Примечание: ${this.requestData.comment.value}
`

            await TradeRequestsManager.create({
                contractor_name: this.requestData.name.value,
                contractor_phonenumber: this.requestData.phoneNumber.value,
                description: description
            });

            //this.krForm.clearFormDataFromLocalStorage();
            //this.krForm.setDefaultValues();

            this.krForm.trySetInput("agreeProcess", false);
            this.$emit('success-process');
        }

        phoneMask = imaskRussianPhoneMask;

        // valueMeterMask = {
        //     mask: Number,  // enable number mask

        //     // other options are optional with defaults below
        //     scale: 9,  // digits after point, 0 for integers
        //     signed: false,  // disallow negative
        //     thousandsSeparator: '',  // any single char
        //     padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
        //     normalizeZeros: true,  // appends or removes zeros at ends
        //     radix: ',',  // fractional delimiter
        //     mapToRadix: ['.'],  // symbols to process as radix
        // }

        // personalAccountNumberMask = {
        //     mask: Number,
        //     scale: 0,
        //     signed: false
        // }
    }
</script>
