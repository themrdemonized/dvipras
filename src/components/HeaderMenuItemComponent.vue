<style scoped lang="scss">
    .v-button
    {
        position: relative;
        display: inline-block;
        width: 98px;
        height: 64px;

        border-radius: 8px;

        user-select: none;

        color: var(--kr-color-main-plain-text);

        -webkit-tap-highlight-color: transparent;

        &.router-link-active
        {
            color: var(--kr-color-feedback-active);
            pointer-events: none;

            &:hover
            {
                // For mobile experience
                color: var(--kr-color-feedback-active);
            }
        }

        &:hover
        {
            color: var(--kr-color-main-help-text);
        }
    }

    .v-box
    {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;

        width: 98px;
        height: 64px;

        transform: translate(-50%, -50%);
    }

    .v-fragment
    {
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .v-header
    {
        top: 0;
    }

    .v-body
    {
        bottom: 0;
    }
</style>

<template>
    <router-link class="v-button" tabindex="0" :to="to">
        <div class="v-box">
            <div class="v-header v-fragment">
                <slot name="header"></slot>
            </div>

            <div class="v-body v-fragment">
                <slot name="body"></slot>
            </div>
        </div>
    </router-link>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    import IconArtComponent from "./icons/IconArtComponent"

    const Component = Options;
    @Component({
        components: {

        },
        props: {
            to: String
        }
    })
    export default class HeaderMenuItemComponent extends Vue {

    }
</script>