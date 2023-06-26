<style scoped lang="scss">   

</style>

<template>
    <div>
        <flex-button-component
            class="v-banner-button"
            mode="text-only"
            :transparent="transparent"
            @action="onOpenMetersModalData"

        >
            <template v-slot:text><span class="kr-font-m-button">Подать заявку</span></template>
        </flex-button-component>
        <meters-data-modal-component :is-opened="metersDataModalIsOpened" @close="metersDataModalIsOpened=false" />
    </div>

</template>

<script>
    import { Options, Vue } from "vue-class-component";
    
    import FlexButtonComponent from "./FlexButtonComponent";
    import MetersDataModalComponent from "./modals/MetersDataModalComponent";

    const Component = Options;
    @Component({
        components: {
            FlexButtonComponent,
            MetersDataModalComponent,
        },
        props: {
            transparent: {
                type: Boolean,
                default: false,
            }
        },
        watch: {

        },
        emits: [],
    })
    export default class ZayavkaButtonComponent extends Vue {
        metersDataModalIsOpened = false;

        onOpenMetersModalData()
        {
            //modalTranslateData.el = this.$refs.open_meters_button.$el;
            this.metersDataModalIsOpened = !this.metersDataModalIsOpened;
        }

    }
</script>