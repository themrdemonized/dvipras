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
    export default class IconArrowDownComponent extends Vue {
        icon_svg = require('../../icons_svg/arrow-down.svg');
    }
</script>