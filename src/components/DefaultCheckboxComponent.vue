<style scoped lang="scss">
    

    .v-input-wrapper
    {
        position: relative;

        display: grid;
        grid-template-columns: 20px auto;
        align-items: start;

        width: 100%;
        height: 100%;

        cursor: pointer;

        &:hover
        {
            .v-checkbox
            {
                border: 1px solid var(--kr-color-main-field-border);
            }
        }

        &:active
        {
            .v-checkbox
            {
                background: var(--kr-color-main-light-fill);
                border: 1px solid var(--kr-color-main-help-text);
            }
        }

        &.v-focused
        {
            .v-checkbox
            {
                border: 1px solid var(--kr-color-feedback-active-2);
                box-shadow: 0 0 0 3px var(--kr-color-indicator-active);
            }
        }

        &.v-checked
        {
            .v-check-icon
            {
                display: block;
                color: var(--kr-color-main-white);
            }

            .v-checkbox
            {
                background: var(--kr-color-feedback-active-2);
                border: none;
            }

            &:hover
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-active-1);
                }
            }

            &:active
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-active-3);
                }
            }

            &.v-focused
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-active-2);
                }
            }
        }

        &.v-disabled
        {
            .v-checkbox
            {
                background: var(--kr-color-main-light-divider);
                border: none;
            }

            &.v-checked
            {
                .v-checkbox
                {
                    background: var(--kr-color-main-field-border);
                }
            }
        }

        &.v-error
        {
            .v-checkbox
            {
                background: var(--kr-color-main-white);
                border: 1px solid var(--kr-color-feedback-error-3);
            }

            .v-caption
            {
                color: var(--kr-color-feedback-error-2);
            }

            &:hover
            {
                .v-checkbox
                {
                    border: 1px solid var(--kr-color-feedback-error-2);
                }
            }

            &:active
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-error-1);
                }
            }

            &.v-focused
            {
                .v-checkbox
                {
                    box-shadow: 0px 0px 0px 3px var(--kr-color-indicator-error);
                }
            }

            &.v-checked
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-error-2);
                    border: none;
                }

                &:hover
                {
                    .v-checkbox
                    {
                        background: var(--kr-color-feedback-error-3);
                    }
                }

                &:active
                {
                    .v-checkbox
                    {
                        background: var(--kr-color-feedback-error-2);
                    }
                }
            }

            &.v-disabled
            {
                .v-checkbox
                {
                    background: var(--kr-color-feedback-error-1);
                    border: none;
                }

                .v-caption
                {
                    color: var(--kr-color-main-help-text);
                }

                &:hover
                {
                    .v-checkbox
                    {
                        background: var(--kr-color-feedback-error-1);
                    }
                }

                &.v-checked
                {
                    .v-check-icon
                    {
                        color: var(--kr-color-feedback-error-2);
                    }
                }
            }
        }
    }

    .v-checkbox-wrapper
    {
        padding-top: 2px;
        padding-bottom: 2px;
    }

    .v-checkbox
    {
        position: relative;

        width: 20px;
        height: 20px;

        border: 1px solid var(--kr-color-main-divider);

        border-radius: 4px;

        transition: all ease 0.2s;

        color: var(--kr-color-main-plain-text);

        box-sizing: border-box;
    }

    .v-check-icon
    {
        width: 16px;
        height: 16px;
        display: none;

        position: absolute;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    .v-caption
    {
        color: var(--kr-color-main-plain-text);

        transition: all ease 0.2s;

        @include kiraFont(body-2);

        margin-left: 12px;

        text-align: left;
    }
</style>

<template>
    <div class="vc-default-checkbox">
        <div
                class="v-input-wrapper"
                :class="{
                    'v-focused': isFocused,
                    'v-disabled': disabled === true || disabled === 'true',
                    'v-error': isError === true || isError === 'true',
                    'v-checked': currentChecked
                }"
                :tabindex=" disabled ? undefined : '0'"

                @focus="onFocus"
                @blur="isFocused = false"

                @keyup="onKeyUp"

                @click="onChange"
        >
            <div class="v-checkbox-wrapper">
                <div class="v-checkbox">
                    <icon-check-component class="v-check-icon" />
                </div>
            </div>
            <span v-if="$slots.default" class="v-caption">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconCheckComponent from "./icons/IconCheckComponent";

    const Component = Options;
    @Component({
        components: {
            IconCheckComponent
        },
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: [ String, Boolean ],
                default: false
            },
            isError: {
                type: [ String, Boolean ],
                default: false
            }
        },
        emits: ['change'],
        watch: {
            checked: function(newValue)
            {
                this.currentChecked = newValue;
            },
            disabled: function (newValue) {
                if(newValue)
                {
                    this.isFocused = false;
                }
            }
        }
    })
    export default class DefaultCheckboxComponent extends Vue
    {
        isFocused = false;
        currentChecked = false;

        beforeMount()
        {
            this.currentChecked = this.checked;
        }

        onFocus()
        {
            this.isFocused = true;
        }

        onChange()
        {
            if(!this.disabled)
            {
                this.currentChecked = !this.currentChecked;
                this.$emit('change', this.currentChecked);
            }
        }

        onKeyUp(e)
        {
            if(this.disabled)
                return;

            if (e.keyCode === 13) {
                this.onChange();
                e.preventDefault();
            }
        }
    }
</script>