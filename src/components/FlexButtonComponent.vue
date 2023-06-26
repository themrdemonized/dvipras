<style scoped lang="scss">
    .vc-flex-button
    {
        @include flex(center);
        color: #fff;

        background: kiraColor(primary);
        transition: all 0.2s ease;
        border-radius: 4px;

        user-select: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

        padding: 16px 20px;
        width: fit-content;

        &.vc-flex-button-s {
            padding: 8px 12px;
            .v-icon-btn {
                margin-left: 2px;
                &.v-icon-before-text {
                    order: -1;
                    margin-left: 0;
                    margin-right: 2px;
                }
            }
        }

        &.vc-flex-button-s2 {
            padding: 8px 16px;
            .v-icon-btn {
                margin-left: 2px;
                &.v-icon-before-text {
                    order: -1;
                    margin-left: 0;
                    margin-right: 2px;
                }
            }
        }

        &:hover
        {
            background: kiraColor(secondary);
        }

        &:active, &.active
        {
            background: kiraColor(secondary);
        }

        &.vc-flex-button-transparent {
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.32);
            color: #fff;
            &:active, &:hover {
                background-color: #fff;
                border: 1px solid #fff;
                @include color(primary);
            }
        }

        &.vc-flex-button-disabled
        {
            cursor: unset;
            background: var(--kr-color-feedback-inactive);
        }
    }

    .v-icon-btn
    {
        margin-left: 4px;
        &.v-icon-before-text {
            order: -1;
            margin-left: 0;
            margin-right: 4px;
        }

    }

    .vc-flex-button-text-only
    {
        .v-icon-btn
        {
            display: none;
        }
    }

    .vc-flex-button-icon-only
    {
        &.vc-flex-button
        {
            padding: 20px 20px;
        }

        &.vc-flex-button-s {
            padding: 10px 16px;
        }

        .v-text
        {
            display: none;
        }

        .v-icon-btn
        {
            margin: 0!important;
        }
    }

    .kr-font-s2-button {
        @include kiraFont(body-2);
    }
</style>

<template>
    <a class="vc-flex-button"

       @click="onClick"
       @keyup="onKeyUp"

       :tabindex="enabled ? '0' : undefined "
       :class="{
        'vc-flex-button-full': mode === 'full',
        'vc-flex-button-text-only': mode === 'text-only',
        'vc-flex-button-icon-only': mode === 'icon-only',
        'vc-flex-button-disabled': !enabled,
        'vc-flex-button-transparent': transparent,
        'vc-flex-button-s': size === 's',
        'vc-flex-button-s2': size === 's2',
    }">
        <div :class="{
            'v-text': true,
            'kr-font-m-button': size === 'm' || !sizes[size],
            'kr-font-s-button': size === 's',
            'kr-font-s2-button': size === 's2',
        }">
            <slot name="text" />
        </div>
        <div :class="{
            'v-icon-btn': true,
            'v-icon-before-text': iconBeforeText
            }">
            <slot name="icon" />
        </div>
    </a>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconArtComponent from "./icons/IconArtComponent"

    const Component = Options;
    @Component({
        components: {

        },
        props: {
            to: String,
            mode: {
                type: String,
                default: 'full'
            },
            transparent: {
                type: Boolean,
                default: false,
            },
            enabled: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'm'
            },
            iconBeforeText: {
                type: Boolean,
                default: false
            }
        },
        emits: [ 'action' ]
    })
    export default class FlexButtonComponent extends Vue {

        sizes = {
            's': true,
            'm': true,
        }

        onClick()
        {
            if(this.enabled)
            {
                this.$emit('action');
            }
        }

        onKeyUp(e)
        {
            if(!this.enabled)
                return;

            if (e.keyCode === 13) {
                this.$emit('action');
                e.preventDefault();
            }
        }
    }
</script>