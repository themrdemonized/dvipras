<style scoped lang="scss">
    .vc-simple-form-group-fragment
    {
        margin-bottom: 32px;
    }

    @media (max-width: 680px)
    {
        .vc-simple-form-group-fragment
        {
            margin-bottom: 24px;
        }
    }
</style>

<template>
    <div class="vc-simple-form-group-fragment">
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
    export default class SimpleFormGroupFragment extends Vue
    {

    }
</script>
