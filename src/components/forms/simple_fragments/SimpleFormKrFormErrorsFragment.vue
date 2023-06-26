<style scoped lang="scss">
    .vc-simple-form-kr-form-errors-fragment
    {
        margin-top: 4px;
        margin-left: 16px;

        text-align: left;
    }

    .v-form-error
    {
        &:not(:last-child)
        {
            margin-bottom: 8px;
        }

        color: var(--kr-color-feedback-error-2);
    }
</style>

<template>
    <div v-if="hasErrorsInGroupInput(fields)" class="vc-simple-form-kr-form-errors-fragment">
        <template v-for="field in fields" :key="field">
            <div v-for="error in data[field].errors" class="v-form-error kr-font-caption">
                {{error.validation.errorText}}
            </div>
        </template>
    </div>
</template>

<script>
    import { Options, Vue } from "vue-class-component";

    const Component = Options;
    @Component({
        components: {
        },
        props: {
            data: Object,
            fields: Array
        }
    })
    export default class SimpleFormKrFormErrorsFragment extends Vue
    {
        hasErrorsInGroupInput(inputs)
        {
            for(let name of inputs)
            {
                if(this.data[name].errors.length > 0)
                    return true;
            }

            return false;
        }
    }
</script>
