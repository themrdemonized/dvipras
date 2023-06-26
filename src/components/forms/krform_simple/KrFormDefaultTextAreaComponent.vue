<style scoped lang="scss">
    
</style>

<template>
    <default-text-area-component :value="krFormData[field].value"
                             @input="krForm.trySetInput(field, $event)"
                             :is-error="krFormData[field].errors.length > 0"
    >
        <slot></slot>
    </default-text-area-component>
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import DefaultTextAreaComponent from "../../DefaultTextAreaComponent";

    const Component = Options;
    @Component({
        components: {
            DefaultTextAreaComponent
        },
        props: {
            krForm: Object,
            krFormData: Object,
            field: String
        }
    })
    export default class KrFormDefaultTextAreaComponent extends Vue
    {

    }
</script>