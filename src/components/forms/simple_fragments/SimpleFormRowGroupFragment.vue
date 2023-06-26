<style scoped lang="scss">
    .vc-simple-form-row-group-fragment
    {
        &:not(:last-child)
        {
            margin-bottom: 16px;
        }
    }

    @media (max-width: 400px)
    {
        .vc-simple-form-row-group-fragment
        {
            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }
    }
</style>

<template>
    <div class="vc-simple-form-row-group-fragment">
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
    export default class SimpleFormRowGroupFragment extends Vue
    {

    }
</script>
