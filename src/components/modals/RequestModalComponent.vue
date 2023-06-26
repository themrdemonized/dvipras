<style scoped lang="scss">
    

    .v-input-form
    {
        width: auto;
    }

    .v-send-button
    {
        text-align: center;
    }

    .v-send-text
    {
        width: 200px;
    }

    .v-no-break
    {
        white-space: nowrap;
    }

    .v-loader-box
    {
        position: relative;
        height: 472px;
        width: 100%;
        text-align: center;
    }

    .content-shift-enter-active,
    .content-shift-leave-active
    {
        &.v-form,&.v-loader-box
        {
            transition: all .5s cubic-bezier(0.36, 0.83, 0.48, 0.99);
        }
    }

    .content-shift-enter-from,
    .content-shift-leave-to {
        &.v-form,&.v-loader-box
        {
            opacity: 0;
        }
    }

    .content-shift-leave-to {
        &.v-form,&.v-loader-box
        {
            transform: translateX(-20px);
        }
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
    <modal-closable-titled-component :is-enabled="isOpened" @close="close">
        <template v-slot:title>Новая заявка</template>
        <template v-slot:body>
            <transition name="content-shift" mode="out-in">
                <div v-if="currentMode === 'enter'" class="v-form">
                    <simple-form-group-fragment>
                        <simple-form-row-group-fragment>
                            <kr-form-default-input-component class="v-input-form"
                                                             :krForm="krForm"
                                                             :krFormData="requestData"
                                                              field="streetHouse"
                                                             name="street"
                                                             autocomplete="street-address"
                            >Улица и дом</kr-form-default-input-component>
                            <simple-form-kr-form-errors-fragment
                                :data="requestData"
                                :fields="[ 'streetHouse' ]"
                            />
                        </simple-form-row-group-fragment>

                        <simple-form-row-group-fragment>
                            <simple-form-row-triple-fragment>
                                <kr-form-default-input-component class="v-input-form"
                                                                 :krForm="krForm"
                                                                 :krFormData="requestData"
                                                                 field="apartment"
                                                                 name="apartment"
                                >
                                    <template v-if="lowModeEnabled">Кв.</template>
                                    <template v-else>Квартира</template>
                                </kr-form-default-input-component>

                                <kr-form-default-input-component class="v-input-form"
                                                                 :krForm="krForm"
                                                                 :krFormData="requestData"
                                                                 field="entrance"
                                                                 name="entrance"
                                >
                                    <template v-if="lowModeEnabled">Под.</template>
                                    <template v-else>Подъезд</template>
                                </kr-form-default-input-component>

                                <kr-form-default-input-component class="v-input-form"
                                                                 :krForm="krForm"
                                                                 :krFormData="requestData"
                                                                 field="floor"
                                                                 name="floor"
                                >Этаж</kr-form-default-input-component>
                            </simple-form-row-triple-fragment>

                            <simple-form-kr-form-errors-fragment
                                    :data="requestData"
                                    :fields="[ 'apartment', 'entrance', 'floor' ]"
                            />
                        </simple-form-row-group-fragment>
                    </simple-form-group-fragment>

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
                        <default-text-area-component class="v-input-form"
                                                     :value="requestData.message.value"
                                                     @input="krForm.trySetInput('message', $event)"
                                                     :is-error="requestData.message.errors.length > 0"
                        >Текст обращения</default-text-area-component>
                        <simple-form-kr-form-errors-fragment
                                :data="requestData"
                                :fields="[ 'message' ]"
                        />
                    </simple-form-group-fragment>

                    <simple-form-group-fragment>
                        <default-checkbox-component
                                :checked="requestData.agreeProcess.value"
                                @change="krForm.trySetInput('agreeProcess', $event)"
                                :is-error="requestData.agreeProcess.errors.length > 0">Даю согласие на обработку моих <a href="#" @click="krForm.trySetInput('agreeProcess', !requestData.agreeProcess.value)" class="v-no-break">персональных данных</a></default-checkbox-component>
                        <simple-form-kr-form-errors-fragment
                                :data="requestData"
                                :fields="[ 'agreeProcess' ]"
                        />
                    </simple-form-group-fragment>

                    <flex-button-component @action="sendRequest" class="v-send-button" mode="text-only">
                        <template v-slot:text>
                            <div class="v-send-text">Отправить</div>
                        </template>
                    </flex-button-component>
                </div>
                <success-modal-body-component v-else-if="currentMode === 'success'" @ok="close">
                    Заявка принята в обработку. Оператор свяжется с Вами  в ближайшее время
                </success-modal-body-component>
                <div v-else class="v-loader-box">
                    <random-loader-spinner-component/>
                </div>
            </transition>
        </template>
    </modal-closable-titled-component>
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

    import SuccessModalBodyComponent from "../modal_bodys/SuccessModalBodyComponent";
    import SimpleFormGroupFragment from "../forms/simple_fragments/SimpleFormGroupFragment";
    import SimpleFormRowGroupFragment from "../forms/simple_fragments/SimpleFormRowGroupFragment";
    import SimpleFormRowTripleFragment from "../forms/simple_fragments/SimpleFormRowTripleFragment";
    import SimpleFormRowDoubleFragment from "../forms/simple_fragments/SimpleFormRowDoubleFragment";
    import SimpleFormKrFormErrorsFragment from "../forms/simple_fragments/SimpleFormKrFormErrorsFragment";

    const Component = Options;
    @Component({
        components: {
            SimpleFormKrFormErrorsFragment,
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
            SuccessModalBodyComponent
        },
        props: {
            isOpened: Boolean
        },
        watch: {
            isOpened: function(newVal) {
                if(newVal) {
                    this.currentMode = 'enter';
                    this.krForm.initializeFromStorage()
                }
            }
        },
        emits: ['close']
    })
    export default class RequestModalComponent extends Vue
    {
        requestData = {
            streetHouse: {
                value: 'ул. Флегонтова, ',
                defaultValue: 'ул. Флегонтова, ',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Улица и дом')
                ],
                type: String
            },
            apartment: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Квартира')
                ],
                type: String
            },
            entrance: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Подъезд')
                ],
                type: String
            },
            floor: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Этаж')
                ],
                type: String
            },
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
            message: {
                value: '',
                defaultValue: '',
                errors: [],
                validations: [
                    new KrFormEmptyStringValidation('Текст обращения')
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

        currentMode = 'enter';

        krForm = new KrForm('requestModalForm-', this.requestData);

        lowModeEnabled = false;

        beforeMount()
        {
            this.lowModeQuery = window.matchMedia('(max-width: 400px)');

            window.addEventListener("resize", this.resizeEvent, false);
            window.addEventListener("orientationchange", this.resizeEvent, false);
            this.resizeEvent();
        }

        beforeUnmount()
        {
            window.removeEventListener("resize", this.resizeEvent, false);
            window.removeEventListener("orientationchange", this.resizeEvent, false);
        }

        resizeEvent()
        {
            this.lowModeEnabled = this.lowModeQuery.matches;
        }

        close()
        {
            this.$emit('close');
        }

        async sendRequest()
        {
            if(!this.krForm.isValidForm())
            {
                return;
            }

            this.currentMode = 'loading';

            await TradeRequestsManager.create({
                contractor_name: this.requestData.name.value,
                contractor_phonenumber: this.requestData.phoneNumber.value,
                description:
`Улица и дом: ${this.requestData.streetHouse.value}
Квартира: ${this.requestData.apartment.value}
Подъезд: ${this.requestData.entrance.value}
Этаж: ${this.requestData.floor.value}

ФИО: ${this.requestData.name.value}
Телефон: ${this.requestData.phoneNumber.value}
E-mail: ${this.requestData.email.value}

Обращение:
${this.requestData.message.value}`
            });

            //this.krForm.clearFormDataFromLocalStorage();
            //this.krForm.setDefaultValues();
            this.krForm.trySetInput("message", '');
            this.krForm.trySetInput("agreeProcess", false);

            this.currentMode = 'success';
        }

        phoneMask = imaskRussianPhoneMask;

    }
</script>
