<style scoped lang="scss">
    

    .vc-link-button
    {
        display: inline-block;
        text-decoration: none;

        &:hover
        {
            cursor: pointer;
            
            .v-text
            {
                color: var(--kr-color-feedback-active-2);
            }

            .v-line
            {
                height: 4px;
            }
        }

        &:active
        {
            .v-text
            {
                color: var(--kr-color-feedback-active-3);
            }

            .v-line
            {
                background-color: var(--kr-color-feedback-active-3);
            }
        }
    }

    .v-text
    {
        color: var(--kr-color-main-header);
        margin-bottom: 4px;
    }

    .v-line-wrapper
    {
        position: relative;
        width: 100%;
        height: 4px;
    }

    .v-line
    {
        position: absolute;

        height: 2px;
        width: 100%;

        background-color: var(--kr-color-feedback-active-2);

        transition: height 0.3s ease;

        bottom: 0;
        left: 0;
    }
</style>

<template>
    <a :href="href" class="vc-link-button">
        <div class="v-text kr-font-h4">
            <slot></slot>
        </div>
        <div class="v-line-wrapper">
            <div class="v-line"></div>
        </div>
    </a>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconArrowComponent from './icons/IconArrowComponent';

    const Component = Options;
    @Component({
        components: {
        },
        props: {
            href: String
        }
    })
    export default class LinkButtonComponent extends Vue
    {

    }
</script>