<style scoped lang="scss">
    .vc-simple-form-row-triple-fragment
    {
        display: grid;
        grid-template-columns: repeat(3, calc((100% - 16px * 2)/3));
        grid-gap: 16px;
    }

    @media (max-width: 400px)
    {
        .v-triple-input
        {
            grid-template-columns: repeat(3, calc((100% - 16px * 2)/3));
            grid-gap: 16px;
        }
    }
</style>

<template>
    <div class="vc-simple-form-row-triple-fragment">
        <slot></slot>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    const Component = Options;
    @Component({
        components: {
        },
        props: {
        }
    })
    export default class SimpleFormRowTripleFragment extends Vue
    {

    }
</script>
