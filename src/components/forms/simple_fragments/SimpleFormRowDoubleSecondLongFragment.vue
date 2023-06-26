<style scoped lang="scss">
    .vc-simple-form-row-double-second-long-fragment
    {
        display: grid;
        grid-template-columns: calc((100% - 16px * 2)/3) auto;
        grid-gap: 16px;
    }
</style>

<template>
    <div class="vc-simple-form-row-double-second-long-fragment">
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
    export default class SimpleFormRowDoubleSecondLongFragment extends Vue
    {

    }
</script>
