<style scoped lang="scss">
    .v-svg {
        width: 20px;
        height: 20px;
    }
</style>

<template>
    <icon-component class="v-svg" :icon_svg="icon_svg" />
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
    export default class IconInstagramComponent extends Vue {
        icon_svg = require('../../icons_svg/instagram.svg');
    }
</script>