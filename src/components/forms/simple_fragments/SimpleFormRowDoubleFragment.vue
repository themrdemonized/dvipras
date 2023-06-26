<style scoped lang="scss">
    .vc-simple-form-row-double-fragment
    {
        display: grid;
        grid-template-columns: repeat(2, calc((100% - 24px)/2));
        grid-gap: 24px;
    }

    @media (max-width: 680px)
    {
        .vc-simple-form-row-double-fragment
        {
            grid-template-columns: repeat(2, calc((100% - 16px)/2));
            grid-gap: 16px;
        }
    }
</style>

<template>
    <div class="vc-simple-form-row-double-fragment">
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
    export default class SimpleFormRowDoubleFragment extends Vue
    {

    }
</script>
