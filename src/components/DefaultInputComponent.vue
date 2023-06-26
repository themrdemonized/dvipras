<style scoped lang="scss">
    

    .vc-default-input
    {
        width: 264px;
        height: 56px;
    }

    .v-input-wrapper
    {
        position: relative;

        width: 100%;
        height: 100%;

        input
        {
            width: 100%;
            height: 56px;

            border: 1px solid var(--kr-color-main-field-border);

            border-radius: 8px;

            outline: none;

            padding: 24px 0 8px 16px;

            box-sizing: border-box;

            transition: all ease 0.2s;

            color: var(--kr-color-main-plain-text);
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            /* display: none; <- Crashes Chrome on hover */
            -webkit-appearance: none;
            margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }

        input[type=number] {
            -moz-appearance:textfield; /* Firefox */
        }

        &:hover
        {
            input
            {
                border: 1px solid var(--kr-color-main-help-text);
            }
        }

        &.v-focused
        {
            input
            {
                border: 1px solid var(--kr-color-feedback-active-2);
                box-shadow: 0 0 0 3px var(--kr-color-indicator-active);
            }

            .v-caption
            {
                top: 8px;
                transform: none;
                color: var(--kr-color-feedback-active-2);

                @include kiraFont(caption);
            }
        }

        &.v-with-text
        {
            .v-caption
            {
                top: 8px;
                transform: none;

                @include kiraFont(caption);
            }
        }

        &.v-disabled
        {
            input
            {
                background: var(--kr-color-main-light-fill);
                border: 1px solid var(--kr-color-main-divider);
                color: var(--kr-color-main-help-text);
            }

            .v-caption
            {
                color: var(--kr-color-main-help-text);
            }
        }

        &.v-error
        {
            input
            {
                background: var(--kr-color-feedback-error-1);
                transition: all ease 0.2s, padding-right 0s;
                padding-right: 32px + 8px;
                border: 1px solid var(--kr-color-feedback-error-2);
            }

            .v-caption
            {
                color: var(--kr-color-feedback-error-2);
            }

            .v-icon-warning
            {
                display: inline-block;
            }

            &:hover
            {
                input
                {
                    background: var(--kr-color-feedback-error-1);
                }

                .v-caption
                {
                    color: var(--kr-color-main-help-text);
                }
            }

            &.v-focused
            {
                input
                {
                    box-shadow: 0px 0px 0px 3px var(--kr-color-indicator-error);
                }

                .v-caption
                {
                    color: var(--kr-color-feedback-error-2);
                }
            }

            &.v-with-text
            {
                &:hover
                {
                    .v-caption
                    {
                        color: var(--kr-color-feedback-error-2);
                    }
                }
            }

            &.v-disabled
            {
                input
                {
                    border: 1px solid var(--kr-color-feedback-error-1);
                }

                .v-caption
                {
                    color: var(--kr-color-main-help-text);
                }

                &:hover
                {
                    input
                    {
                        background: var(--kr-color-feedback-error-1);
                    }
                }

                &.v-with-text
                {
                    .v-caption
                    {
                        color: var(--kr-color-feedback-error-2);
                    }
                }
            }
        }
    }

    .v-caption
    {
        color: var(--kr-color-main-help-text);

        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);

        pointer-events: none;
        user-select: none;

        transition: all ease 0.2s;

        @include kiraFont(body-2);
    }

    .v-group-icon
    {
        position: absolute;
        top: 50%;
        right: 16px - 4px;

        height: 16px;

        transform: translateY(-50%);

        pointer-events: none;
    }

    .v-icon-status
    {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;

        margin-right: 4px;
    }

    .v-icon-warning
    {
        color: var(--kr-color-feedback-error-2);
        display: none;
    }
</style>

<template>
    <div class="vc-default-input">
        <div
                class="v-input-wrapper"
                :class="{
                    'v-focused': isFocused,
                    'v-with-text': currentValue && currentValue !== '',
                    'v-disabled': disabled === true || disabled === 'true',
                    'v-error': isError === true || isError === 'true'
                }"
        >
            <input
                    ref="input"
                    class="kr-font-body-2"

                    :disabled="disabled === true || disabled === 'true'"

                    @focus="isFocused = true"
                    @blur="isFocused = false"
                    @change="onChange"
                    @input="onInput"

                    :type="type"
                    :name="name"
                    :value="currentValue"
                    :autocomplete="autocomplete"
            />
            <span class="v-caption">
                <slot></slot>
            </span>
            <div class="v-group-icon">
                <icon-warning-component class="v-icon-status v-icon-warning" />
            </div>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconWarningComponent from "./icons/IconWarningComponent";

    import IMask from 'imask/esm/imask';

    const Component = Options;
    @Component({
        components: {
            IconWarningComponent
        },
        props: {
            name: String,
            autocomplete: String,
            type: {
                type: String,
                default: "text"
            },
            value: String,
            disabled: {
                type: [ String, Boolean ],
                default: false
            },
            isError: {
                type: [ String, Boolean ],
                default: false
            },
            imaskOptions: Object
        },
        emits: ['change', 'input'],
        watch: {
            value: function(newValue)
            {
                this.currentValue = newValue;

                if(this.imask)
                {
                    //this.imask.updateValue();
                }
            }
        }
    })
    export default class DefaultInputComponent extends Vue
    {
        isFocused = false;
        currentValue = '';

        beforeMount()
        {
            if(this.value)
            {
                this.currentValue = this.value;
            }
        }

        beforeUnmount()
        {
            if(this.imask)
            {
                this.imask.destroy();
                delete this.imask;
            }
        }

        mounted()
        {
            if(this.imaskOptions)
            {
                const _this = this;
                this.imask = IMask(this.$refs.input, this.imaskOptions)
                    .on('accept', () => {
                        _this.currentValue = _this.imask.value;
                        _this.$emit('input', _this.imask.value);
                    });

                this.currentValue = this.imask.value;
            }
        }

        onChange(e)
        {
            if(this.imask)
            {
                this.currentValue = this.imask.value;
                this.$emit('change', this.imask.value);
            }
            else
            {
                this.currentValue = e.target.value;
                this.$emit('change', e.target.value);
            }
        }

        onInput(e)
        {
            if(this.imask)
            {
                return;
            }

            this.currentValue = e.target.value;
            this.$emit('input', e.target.value);
        }
    }
</script>