<style scoped lang="scss">
    
</style>

<template>
    <default-input-component :value="krFormData[field].value"
                             @input="krForm.trySetInput(field, $event)"
                             :is-error="krFormData[field].errors.length > 0"
    >
        <slot></slot>
    </default-input-component>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import DefaultInputComponent from "../../DefaultInputComponent";

    const Component = Options;
    @Component({
        components: {
            DefaultInputComponent
        },
        props: {
            krForm: Object,
            krFormData: Object,
            field: String
        }
    })
    export default class KrFormDefaultInputComponent extends Vue
    {

    }
</script>