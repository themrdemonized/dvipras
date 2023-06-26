<style scoped lang="scss">

</style>

<template>
    <icon-component :icon_svg="icon_svg" />
</template>

<script>
    import { Options, Vue } from "vue-class-component";
    import IconComponent from "../IconComponent";

    @Options({
        components: {
            IconComponent
        },
        props: {

        }
    })
    export default class IconWhatsappComponent extends Vue {
        icon_svg = require('../../icons_svg/whatsapp.svg');
    }
</script>