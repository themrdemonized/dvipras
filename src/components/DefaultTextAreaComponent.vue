<style scoped lang="scss">
    

    .vc-default-input
    {
        width: 264px;
    }

    .v-input-wrapper
    {
        position: relative;

        width: 100%;
        height: 80px;

        textarea
        {
            width: 100%;
            height: 100%;

            resize: none;

            border: 1px solid var(--kr-color-main-field-border);

            border-radius: 8px;

            outline: none;

            padding: 24px 0 8px 16px;

            box-sizing: border-box;

            transition: all ease 0.2s;

            color: var(--kr-color-main-plain-text);
        }

        &:hover
        {
            textarea
            {
                border: 1px solid var(--kr-color-main-help-text);
            }
        }

        &.v-focused
        {
            textarea
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
            textarea
            {
                background: var(--kr-color-main-light-fill);
                border: 1px solid var(--kr-color-main-divider);
                color: var(--kr-color-main-help-text);
            }

            .v-caption
            {
                color: var(--kr-color-main-help-text);
                background: var(--kr-color-main-light-fill);
            }
        }

        &.v-error
        {
            textarea
            {
                background: var(--kr-color-feedback-error-1);
                transition: all ease 0.2s, padding-right 0s;
                padding-right: 32px + 8px;
                border: 1px solid var(--kr-color-feedback-error-2);
            }

            .v-caption
            {
                color: var(--kr-color-feedback-error-2);
                background: var(--kr-color-feedback-error-1);
            }

            .v-icon-warning
            {
                display: inline-block;
            }

            &:hover
            {
                textarea
                {
                    background: var(--kr-color-feedback-error-1);
                }

                .v-caption
                {
                    color: var(--kr-color-main-help-text);
                    background: var(--kr-color-feedback-error-1);
                }
            }

            &.v-focused
            {
                textarea
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
                textarea
                {
                    border: 1px solid var(--kr-color-feedback-error-1);
                }

                .v-caption
                {
                    color: var(--kr-color-main-help-text);
                }

                &:hover
                {
                    textarea
                    {
                        background: var(--kr-color-feedback-error-1);
                    }

                    .v-caption
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
        top: 16px;

        pointer-events: none;
        user-select: none;

        transition: all ease 0.2s;

        background: white;

        @include kiraFont(body-2);
    }

    .v-group-icon
    {
        position: absolute;
        top: 20px;
        right: 16px - 4px;

        height: 16px;

        pointer-events: none;
    }

    .v-white-box
    {
        position: absolute;
        top: 1px;
        left: 16px;

        width: calc(100% - 16px - 13px);
        height: 23px;

        background: white;

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
                :style="{ height: currentHeight + 'px' }"
        >
            <textarea
                    ref="textarea"

                    class="kr-font-body-2"

                    :disabled="disabled === true || disabled === 'true'"

                    @focus="isFocused = true"
                    @blur="isFocused = false"
                    @change="onChange"
                    @input="onInput"

                    :name="name"
                    :value="currentValue"
            />
            <!--<div class="v-white-box"></div>-->
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

    const Component = Options;
    @Component({
        components: {
            IconWarningComponent
        },
        props: {
            name: String,
            value: String,
            disabled: {
                type: [ String, Boolean ],
                default: false
            },
            isError: {
                type: [ String, Boolean ],
                default: false
            },
            maxHeight: {
                type: Number,
                default: 160
            }
        },
        emits: ['change', 'input'],
        watch: {
            value: function(newValue)
            {
                this.currentValue = newValue;
            }
        }
    })
    export default class DefaultTextAreaComponent extends Vue
    {
        isFocused = false;
        currentValue = '';

        currentHeight = 80;

        beforeMount()
        {
            if(this.value)
            {
                this.currentValue = this.value;
            }
        }

        mounted()
        {
            if(this.value)
            {
                this.updateHeightTextArea();
            }
        }

        onChange(e)
        {
            this.$emit('change', e.target.value);
        }

        updateHeightTextArea()
        {
            let newHeight = this.$refs.textarea.scrollHeight + 2;
            if(newHeight >= this.maxHeight)
            {
                newHeight = this.maxHeight;
            }
            this.currentHeight = newHeight;
        }

        onInput(e)
        {
            this.currentValue = e.target.value;
            this.updateHeightTextArea();
            this.$emit('input', e.target.value);
        }
    }
</script>