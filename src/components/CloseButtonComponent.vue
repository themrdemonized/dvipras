<style scoped lang="scss">
    

    .vc-close-button
    {
        background: var(--kr-color-main-light-fill);
        border-radius: 16px;

        cursor: pointer;

        &:hover
        {
            background: var(--kr-color-main-light-divider);
        }
    }

    .v-icon-close
    {
        margin: 6px;

        width: 20px;
        height: 20px;

        color: var(--kr-color-main-plain-text);
    }
</style>

<template>
    <div class="vc-close-button">
        <icon-cross-component class="v-icon-close" />
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconCrossComponent from "./icons/IconCrossComponent";

    const Component = Options;
    @Component({
        components: {
            IconCrossComponent
        },
        props: {
        }
    })
    export default class CloseButtonComponent extends Vue {

    }
</script>